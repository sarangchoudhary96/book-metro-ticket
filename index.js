// https://delhimetrorail.info/delhi-metro-stations

const { metroLine, commonStation } = require("./config");
const dbData = require("./db");

function dfs(lineData, sourceLine, destLine, ans, isVisited) {
    isVisited.push(sourceLine);
    if (sourceLine == destLine) {
        ans.push([...isVisited].toString());
    } else {
        for (var i = 0; i < lineData.length; i++) {
            if (isVisited.includes(lineData[i])) {
                continue;
            }
            dfs(metroLine[lineData[i]], lineData[i], destLine, ans, isVisited);
        }
    }
    isVisited.pop();
}

function getRoute(sourceLine, destLine, minimunInterchange) {
    let allRoutes = [],
        minimunInterchangeRoutes = [];
    dfs(metroLine[sourceLine], sourceLine, destLine, allRoutes, []);
    if(minimunInterchange) {
        for (const route of allRoutes) {
            const currentRoute = route.split(",");
            if(minimunInterchangeRoutes.length == 0) {
                minimunInterchangeRoutes.push(currentRoute);
            } else {
                if(minimunInterchangeRoutes[0].length > currentRoute.length) {
                    minimunInterchangeRoutes.length = 0;
                    minimunInterchangeRoutes.push(currentRoute);
                } else {
                    if(minimunInterchangeRoutes[0].length == currentRoute.length) {
                        minimunInterchangeRoutes.push(currentRoute);
                    }
                }
            }
        }
        return minimunInterchangeRoutes;
    }
    return allRoutes;
}

function getPath(station, path, requiredStation, stationObj) {
    for (var i=0; i<station.length; i++) {
        path.push(station[i]);
        if(station[i].stationName == requiredStation) {
            stationObj = station[i];
            return true;
        }
        if(station[i].diversion && (getPath(station[i].diversion1, path, requiredStation, stationObj) || getPath(station[i].diversion2, path, requiredStation, stationObj))) {
            return true;
        }
    }

    path.splice(path.length-station.length, station.length);
    return false;
}

function updateRouteThroughDiversion(station, middleStations, distance, sourceObj, destObj, sourceStation, destStation) {
    var pathOne = [],
        pathTwo = [],
        intersection = null;

    // if !sourceObj && !destObj --- find intersection point
    if(!sourceObj && !destObj) {
        getPath(station, pathOne, sourceStation, sourceObj);
        getPath(station, pathTwo, destStation, destObj, distance);

        var i=0,j=0;
        while(i != pathOne.length || j != pathTwo.length) {
            if (i == j && pathOne[i] == pathTwo[j]) {
                i++;
                j++;
            } else {
                intersection = j - 1;
                break;
            }
        }
        pathOne = pathOne.slice(intersection).reverse();
        pathTwo = pathTwo.slice(intersection);
        middleStations.push(pathOne);
        // middleStations.pop(); // removing an intersection element from one array as it will be present in both paths from intersection
        middleStations.push(pathTwo);

        distance.push(parseFloat(pathOne[pathOne.length - 1].distance) > parseFloat(pathOne[0].distance) ? parseFloat(pathOne[pathOne.length - 1].distance) - parseFloat(pathOne[0].distance) : parseFloat(pathOne[0].distance) - parseFloat(pathOne[pathOne.length - 1].distance));

        distance.push(parseFloat(pathTwo[pathTwo.length - 1].distance) > parseFloat(pathTwo[0].distance) ? parseFloat(pathTwo[pathTwo.length - 1].distance) - parseFloat(pathTwo[0].distance) : parseFloat(pathTwo[0].distance) - parseFloat(pathTwo[pathTwo.length - 1].distance));
    } else {
        !sourceObj && getPath(station, pathOne, sourceStation, sourceObj) && middleStations.push(...pathOne) && middleStations.reverse() && !destObj && middleStations.pop();
        !destObj && getPath(station, pathTwo, destStation, destObj, distance) && middleStations.push(...pathTwo);
    }

    if((sourceObj && !destObj) || (!sourceObj && destObj)) {
        distance.length = 0;
        distance.push(parseFloat(middleStations[middleStations.length - 1].distance) > parseFloat(middleStations[0].distance) ? parseFloat(middleStations[middleStations.length - 1].distance) - parseFloat(middleStations[0].distance) : parseFloat(middleStations[0].distance) - parseFloat(middleStations[middleStations.length - 1].distance));
    }
}

function getRouteInfo(stationsList, sourceStation, destStation, sourceLine, temp) {
    if(sourceStation == destStation && temp) {
        return 0;
    }

    var middleStations = [],
    count = 0,
    sourceObj = null,
    destObj = null,
    distance = [],
    diversion = false,
    totalInterchange = 0;
    for (const station of stationsList) {
        if(station.stationName == sourceStation || station.stationName == destStation) {
            if(station.stationName == sourceStation) sourceObj = station;
            if(station.stationName == destStation) destObj = station;

            middleStations.push(station);
            count++;
            if(count == 2) break;
        } else if(middleStations.length > 0 && !station.diversion) {
            middleStations.push(station);
        }
        if(station.diversion && (!sourceObj || !destObj)) {
            // if(middleStations.length == 1) middleStations.length = 0;

            if(!sourceObj && !destObj) totalInterchange = 1;

            updateRouteThroughDiversion([station], middleStations, distance, sourceObj, destObj, sourceStation, destStation);
            diversion = true;
        }
    }
    middleStations = (!diversion && parseFloat(destObj.distance) < parseFloat(sourceObj.distance)) ? middleStations.reverse() : middleStations;

    if(temp) {
        return middleStations.length + 2;
    }
    return {
        route_info: {
            [sourceLine]: !sourceObj && !destObj && middleStations.map((middleStation) => {
                return {
                    source: middleStation[0].stationName,
                    destination: middleStation[middleStation.length - 1].stationName,
                    middle_stations: [...middleStation.slice(1, -1)].map((item) =>item.stationName)
                }
            }) || [{
                source: middleStations[0].stationName,
                destination: middleStations[middleStations.length - 1].stationName,
                middle_stations: [...middleStations.slice(1, -1)].map((item) =>item.stationName)
            }]
        },
        totalStopsInThisLine: middleStations.length,
        distance : !diversion && (parseFloat(destObj.distance) < parseFloat(sourceObj.distance) && parseFloat(sourceObj.distance) - parseFloat(destObj.distance) || parseFloat(destObj.distance) - parseFloat(sourceObj.distance)) || distance.reduce((partialSum, a) => partialSum + a, 0),
        totalInterchange

    }
}

function getSmallestPath(arr, sourceStation, destStation, tempArr, path, count) {
    for(var i=0; i<arr.length; i++) {
        var distance = getRouteInfo(dbData[tempArr[tempArr.length - 1].line], tempArr[tempArr.length - 1].station, arr[i].station, null, true);

        count += distance;
        arr[i].count = distance;
        tempArr.push(arr[i]);
        if(arr[i].station == destStation) {
            tempArr[1].station == sourceStation && tempArr.shift(); // to remove redunsant element
            tempArr.push({count});
            path.push([...tempArr]);
            for(var i=tempArr.length - 1; i>=0; i--) {
                if(tempArr[i].div && tempArr[i].div.length > 1) {
                    break;
                } else {
                    tempArr.pop();
                }
            }
            return true;
        }
        arr[i].div && getSmallestPath(arr[i].div, sourceStation, destStation, tempArr, path, count);
    }
}

function getCommonStations(routeInfo, sourceStation, destStation) {
    var arrOneArr = [],
        index = null,
        temper = [],
        tempFinalArray = [],
        finalArray = [],
        finalResponse = {},
        path = [],
        result = null,
        totalCount = 300;

    arrOneArr.push({
        station: [sourceStation],
        line: routeInfo[0]
    });
    for(var i=0; i<routeInfo.length - 1; i++) {
        arrOneArr.push({
            station: commonStation[routeInfo[i]+'_'+routeInfo[i+1]] || commonStation[routeInfo[i+1]+'_'+routeInfo[i]],
            line: routeInfo[i + 1]
        });
        if(!index && arrOneArr[arrOneArr.length - 1].length > 1) {
            index = arrOneArr.length - 2;
        }
    }
    arrOneArr.push({
        station: [destStation],
        line: routeInfo[routeInfo.length - 1]
    });

    tempFinalArray.push([
        {
            station: destStation,
            line: routeInfo[routeInfo.length - 1]
        }
    ]);

    for(var i=arrOneArr.length - 2; i>=0; i--) {
        for(var j=0; j<arrOneArr[i].station.length; j++) {
            temper.push({
                station: arrOneArr[i].station[j],
                line: arrOneArr[i].line,
                ...(i >= index && {div : tempFinalArray[tempFinalArray.length - 1]})
            })
        }
        if(i >= index) {
            tempFinalArray.push([...temper]);
        } else {
            finalArray.push(...temper);
        }

        temper.length = 0;
    }

    finalArray.push(...tempFinalArray[tempFinalArray.length - 1]);

    getSmallestPath(finalArray, sourceStation, destStation, [finalArray[0]], path, 0);

    for (const element of path) {
        if(element[element.length - 1].count < totalCount) {
            result = element;
            totalCount = element[element.length - 1].count;
        }
    }
    result.pop();

    for(var i=0; i<result.length - 1; i++) {
        var arrayTemp = [];
        arrayTemp.push(result[i].station);
        arrayTemp.push(result[i+1].station);
        finalResponse[result[i].line] = arrayTemp;
    }

    return finalResponse;
}
// getCommonStations(['gray', 'blue', 'magenta'],'Najafgarh','Palam');

function main(sourceStation, destStation, sourceLine, destLine, minimunInterchange) {
    var stationsList = null,
        res = null;
    if(sourceLine == destLine) {
        stationsList = dbData[sourceLine];
        var routeInfo =  getRouteInfo(stationsList, sourceStation, destStation, sourceLine, false);
        var totalInterchange = 0;
        var totalStops = routeInfo.totalStopsInThisLine;
        var distance = routeInfo.distance;
        var timeTaken = (((totalStops - 1) * 20)/60) + ((distance/40)*60);
        var price = ((Math.floor(Math.ceil(distance)/10))*10) + 10;
        routeInfo.timeTaken = Math.ceil(timeTaken) + ' minutes';
        routeInfo.totalInterchange = totalInterchange;
        routeInfo.price = price;
        console.log(JSON.stringify(routeInfo, null, 2));
    } else {
        res = getRoute(sourceLine, destLine, minimunInterchange);
        var commonnStation = getCommonStations(res[0], sourceStation, destStation);
        var routeStation = {},
            distance = 0,
            totalStops = 0;
        for (const [key, value] of Object.entries(commonnStation)) {
            var routeInfo =  getRouteInfo(dbData[key], value[0], value[1], key, false);
            routeStation = {...routeStation, ...routeInfo.route_info};
            distance += routeInfo.distance;
            totalStops += routeInfo.totalStopsInThisLine;
        }
        var timeTaken = (((totalStops - 1) * 20)/60) + ((distance/40)*60);
        var price = ((Math.floor(Math.ceil(distance)/10))*10) + 10;
        console.log(JSON.stringify({
            route_info: routeStation,
            distance,
            total_stops: totalStops - (res[0].length - 1),
            total_interchange: res[0].length - 1,
            timeTaken: Math.ceil(timeTaken) + ' minutes',
            price
        }, null, 2));

    }
}

// main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
// main("Dwarka", "Station 4", "blue", "blue", "false");
// main("Station 4", "Dwarka", "blue", "blue", "false");
// main("Botanical Garden", "Station 4", "blue", "blue", "false");
// main( "Station 4", "Botanical Garden", "blue", "blue", "false");
// main( "Dwarka", "Rajiv Chowk", "blue", "blue", "false");
// main( "Botanical Garden", "Yamuna Bank", "blue", "blue", "false");
// main( "Botanical Garden", "Preet Vihar", "blue", "blue", "false");
// main( "Yamuna Bank","Botanical Garden", "blue", "blue", "false");
// main( "tempStation", "Station 6", "blue", "blue", "false");
// main( "Station 1", "Station 6", "blue", "blue", "false");


// main( "Kirti Nagar", "Inderlok", "green", "green", "false");

main("Najafgarh", "Shahdara", "gray", "red", true);
// main("Najafgarh", "Palam", "gray", "magenta", true);

/**
 * {
    "route_info":{
        "green_line": {
            "source": "madipur",
            "destination": "kirti nagar",
            "middle_stations": ["shivaji park", "punjabi bagh", "ashok park main", "satguru ram singh marg"]
        },
        "blue_line": {
            "source": "kirti nagar",
            "destination": "rajiv chown",
            "middle_stations": ["shadipur", "patel nagar", "rajendra place", "karol bagh", "jhandewalan", "rk ashram marg"]
        }
    },
    "total_interchange": 1,
    "time_taken": "25 min's",
    "total_stops": 13,
    "price": 40
}
 */
