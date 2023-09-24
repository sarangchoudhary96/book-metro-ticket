// https://delhimetrorail.info/delhi-metro-stations

var finalData = {
    red: [
        { stationName: "Shaheed Sthal(New Bus Adda)", distance: "0.0" },
        { stationName: "Hindon River", distance: "1.0" },
        { stationName: "Arthala", distance: "2.5" },
        { stationName: "Mohan Nagar", distance: "3.2" },
        { stationName: "Shyam park", distance: "4.5" },
        { stationName: "Major Mohit Sharma", distance: "5.7" },
        { stationName: "Raj Bagh", distance: "6.9" },
        { stationName: "Shaheed Nagar", distance: "8.2" },
        { stationName: "Dilshad Garden", distance: "9.4" },
        { stationName: "Jhil Mil", distance: "10.3" },
        { stationName: "Mansarovar Park", distance: "11.4" },
        { stationName: "Shahdara", distance: "12.5" },
        { stationName: "Welcome", distance: "13.7", connected_to: "Pink" },
        { stationName: "Seelampur", distance: "14.8" },
        { stationName: "Shastri Park", distance: "16.4" },
        {
            stationName: "Kashmere Gate",
            distance: "18.5",
            connected_to: "Violet",
        },
        { stationName: "Tis Hazari", distance: "19.7" },
        { stationName: "Pul Bangash", distance: "20.6" },
        { stationName: "Pratap Nagar", distance: "21.4" },
        { stationName: "Shastri Nagar", distance: "23.1" },
        { stationName: "Inderlok", distance: "24.3", connected_to: "Green" },
        { stationName: "Kanhaiya Nagar", distance: "25.5" },
        { stationName: "Keshav Puram", distance: "26.2" },
        {
            stationName: "Netaji Subash Place",
            distance: "27.4",
            connected_to: "Pink",
        },
        { stationName: "Kohat Enclave", distance: "28.6" },
        { stationName: "Pitam Pura", distance: "29.6" },
        { stationName: "Rohini East", distance: "30.4" },
        { stationName: "Rohini West", distance: "31.7" },
        { stationName: "Rithala", distance: "32.7" },
    ],
    yellow: [
        { stationName: "Samaypur Badli", distance: "0.0" },
        { stationName: "Rohini Sector 18-19", distance: "0.8" },
        { stationName: "Haiderpur Badli Mor", distance: "2.1" },
        { stationName: "Jahangirpuri", distance: "3.4" },
        { stationName: "Adarsh Nagar", distance: "4.7" },
        { stationName: "Azadpur", distance: "6.2", connected_to: "Pink" },
        { stationName: "Model Town", distance: "7.6" },
        { stationName: "Guru Tegh Bahadur Nagar", distance: "9.0" },
        { stationName: "Vishwavidyalaya", distance: "9.8" },
        { stationName: "Vidhan Sabha", distance: "10.8" },
        { stationName: "Civil Lines", distance: "12.1" },
        {
            stationName: "Kashmere Gate",
            distance: "13.2",
            connected_to: "Violet",
        },
        { stationName: "Chandni Chowk", distance: "14.3" },
        { stationName: "Chawri Bazar", distance: "15.3" },
        {
            stationName: "New Delhi",
            distance: "16.1",
            connected_to: "Orange",
        },
        {
            stationName: "Rajiv Chowk",
            distance: "17.2",
            connected_to: "Blue",
        },
        { stationName: "Patel Chowk", distance: "18.5" },
        {
            stationName: "Central Secretariat",
            distance: "19.4",
            connected_to: "Violet",
        },
        { stationName: "Udyog Bhawan", distance: "19.7" },
        { stationName: "Lok Kalyan Marg", distance: "21.3" },
        { stationName: "Jorbagh", distance: "22.5" },
        {
            stationName: "Dilli Haat INA",
            distance: "23.8",
            connected_to: "Pink",
        },
        { stationName: "AIIMS", distance: "24.6" },
        { stationName: "Green Park", distance: "25.6" },
        {
            stationName: "Hauz Khas",
            distance: "27.4",
            connected_to: "Magenta",
        },
        { stationName: "Malviya Nagar", distance: "29.1" },
        { stationName: "Saket", distance: "30.0" },
        { stationName: "Qutab Minar", distance: "31.7" },
        { stationName: "Chhattarpur", distance: "33.0" },
        { stationName: "Sultanpur", distance: "34.6" },
        { stationName: "Ghitorni", distance: "35.9" },
        { stationName: "Arjan Garh", distance: "38.6" },
        { stationName: "Guru Dronacharya", distance: "40.9" },
        {
            stationName: "Sikandarpur",
            distance: "41.9",
            connected_to: "Rapid",
        },
        { stationName: "MG Road", distance: "43.1" },
        { stationName: "IFFCO Chowk", distance: "44.2" },
        { stationName: "Huda City Centre", distance: "45.7" },
    ],
    blue: [
        {
            stationName: "Dwarka Sector 21",
            distance: "0.0",
            connected_to: "Orange",
        },
        { stationName: "Dwarka Sector 8", distance: "1.7" },
        { stationName: "Dwarka Sector 9", distance: "2.7" },
        { stationName: "Dwarka Sector 10", distance: "3.8" },
        { stationName: "Dwarka Sector 11", distance: "4.8" },
        { stationName: "Dwarka Sector 12", distance: "5.8" },
        { stationName: "Dwarka Sector 13", distance: "6.7" },
        { stationName: "Dwarka Sector 14", distance: "7.6" },
        { stationName: "Dwarka", distance: "9.1", connected_to: "Gray" },
        { stationName: "Dwarka Mor", distance: "10.2" },
        { stationName: "Nawada", distance: "11.4" },
        { stationName: "Uttam Nagar West", distance: "12.4" },
        { stationName: "Uttam Nagar East", distance: "13.4" },
        {
            stationName: "Janak Puri West",
            distance: "14.7",
            connected_to: "Magenta",
        },
        { stationName: "Janak Puri East", distance: "15.7" },
        { stationName: "Tilak Nagar", distance: "16.7" },
        { stationName: "Subhash Nagar", distance: "17.6" },
        { stationName: "Tagore Garden", distance: "18.5" },
        {
            stationName: "Rajouri Garden",
            distance: "19.6",
            connected_to: "Pink",
        },
        { stationName: "Ramesh Nagar", distance: "20.6" },
        { stationName: "Moti Nagar", distance: "21.8" },
        {
            stationName: "Kirti Nagar",
            distance: "22.8",
            connected_to: "Green",
        },
        { stationName: "Shadipur", distance: "23.5" },
        { stationName: "Patel Nagar", distance: "24.8" },
        { stationName: "Rajendra Place", distance: "25.7" },
        { stationName: "Karol Bagh", distance: "26.7" },
        { stationName: "Jhandewalan", distance: "27.9" },
        { stationName: "R K Ashram Marg", distance: "28.9" },
        {
            stationName: "Rajiv Chowk",
            distance: "30.1",
            connected_to: "Yellow",
        },
        { stationName: "Barakhamba", distance: "30.8" },
        {
            stationName: "Mandi House",
            distance: "31.8",
            connected_to: "Violet",
        },
        { stationName: "Supreme Court (Pragati Maidan)", distance: "32.6" },
        { stationName: "Indraprastha", distance: "33.4" },
        {
            stationName: "Yamuna Bank",
            distance: "35.2",
            diversion: true,
            diversion1: [
                { stationName: "Laxmi Nagar", distance: "36.5" },
                { stationName: "Nirman Vihar", distance: "37.6" },
                { stationName: "Preet Vihar", distance: "38.6" },
                {
                    stationName: "Karkarduma",
                    distance: "39.8",
                    connected_to: "Pink",
                },
                {
                    stationName: "Anand Vihar",
                    distance: "40.9",
                    connected_to: "Pink",
                },
                { stationName: "Kaushambi", distance: "41.7" },
                { stationName: "Vaishali", distance: "43.3" },
                {
                    stationName: "tempStation",
                    distance: "44.3",
                    diversion: true,
                    diversion1: [
                        { stationName: "Station 1", distance: "45.5" },
                        { stationName: "Station 2", distance: "46.6" },
                        { stationName: "Station 3", distance: "47.6" },
                    ],
                    diversion2: [
                        { stationName: "Station 4", distance: "45.5" },
                        { stationName: "Station 5", distance: "46.6" },
                        { stationName: "Station 6", distance: "47.6" },
                    ],
                },
            ],
            diversion2: [
                { stationName: "Akshardham", distance: "36.5" },
                {
                    stationName: "Mayur Vihar Phase-1",
                    distance: "38.3",
                    connected_to: "Pink",
                },
                { stationName: "Mayur Vihar Extention", distance: "39.5" },
                { stationName: "New Ashok Nagar", distance: "40.4" },
                { stationName: "Noida Sector 15", distance: "41.4" },
                { stationName: "Noida Sector 16", distance: "42.5" },
                { stationName: "Noida Sector 18", distance: "43.6" },
                {
                    stationName: "Botanical Garden",
                    distance: "44.7",
                    connected_to: "Magenta",
                },
                { stationName: "Golf Course", distance: "45.9" },
                { stationName: "Noida City Center", distance: "47.2" },
                { stationName: "Noida Sector 34", distance: "48.1" },
                {
                    stationName: "Noida Sector 52",
                    distance: "49.3",
                    connected_to: "Aqua",
                },
                { stationName: "Noida Sector 61", distance: "50.5" },
                { stationName: "Noida Sector 59", distance: "51.5" },
                { stationName: "Noida Sector 62", distance: "52.7" },
                { stationName: "Noida Electronic City", distance: "53.9" },
            ],
        },
    ],
    orange: [
        {
            stationName: "New Delhi",
            distance: "0.0",
            connected_to: "Yellow",
        },
        { stationName: "Shivaji Stadium", distance: "1.9" },
        { stationName: "Dhaula Kuan", distance: "8.3" },
        { stationName: "Delhi Aerocity", distance: "14.5" },
        { stationName: "IGI Airport", distance: "17.9" },
        {
            stationName: "Dwarka Sector 21",
            distance: "20.8",
            connected_to: "Blue",
        },
    ],
    green: [
        { stationName: "Inderlok", distance: "0.0", connected_to: "Red" },
        {
            stationName: "Ashok Park Main",
            distance: "1.4",
            diversion: true,
            diversion1: [
                { stationName: "Punjabi Bagh", distance: "2.3" },
                { stationName: "Shivaji Park", distance: "3.9" },
                { stationName: "Madipur", distance: "5.0" },
                { stationName: "Paschim Vihar East", distance: "5.7" },
                { stationName: "Paschim Vihar West", distance: "6.7" },
                { stationName: "Peera Garhi", distance: "7.6" },
                { stationName: "Udyog Nagar", distance: "8.8" },
                { stationName: "Maharaja Surajmal Stadium", distance: "9.5" },
                { stationName: "Nangloi", distance: "10.3" },
                { stationName: "Nangloi Railway Station", distance: "11.2" },
                { stationName: "Rajdhani Park", distance: "12.4" },
                { stationName: "Mundka", distance: "13.7" },
                {
                    stationName: "Mundka Industrial Area (MIA)",
                    distance: "15.0",
                },
                { stationName: "Ghevra Metro station", distance: "17.1" },
                { stationName: "Tikri Kalan", distance: "18.9" },
                { stationName: "Tikri Border", distance: "20.2" },
                { stationName: "Pandit Shree Ram Sharma", distance: "21.5" },
                { stationName: "Bahdurgarh City", distance: "23.0" },
                { stationName: "Brigadier Hoshiar Singh", distance: "24.8" },
            ],
            diversion2: [
                { stationName: "Satguru Ram Singh Marg", distance: "2.5" },
                {
                    stationName: "Kirti Nagar",
                    distance: "3.5",
                    connected_to: "Blue",
                },
            ],
        },
    ],
    rapid: [
        { stationName: "Sector 55-66", distance: "0.0" },
        { stationName: "Sector 54 Chowk", distance: "1.1" },
        { stationName: "Sector 53-54", distance: "2.6" },
        { stationName: "Sector 42-43", distance: "3.9" },
        { stationName: "DLF Phase 1", distance: "5.5" },
        {
            stationName: "Sikandarpur",
            distance: "6.6",
            connected_to: "Yellow",
        },
        { stationName: "DLF Phase 2", distance: "7.3" },
        { stationName: "Belvedere Towers", distance: "8.0" },
        { stationName: "Cyber City", distance: "8.6" },
        { stationName: "Moulsari Avenue", distance: "9.2" },
        { stationName: "DLF Phase 3", distance: "10.0" },
    ],
    violet: [
        {
            stationName: "Kashmere Gate",
            distance: "0.0",
            connected_to: "Yellow",
        },
        { stationName: "Lal Quila", distance: "1.5" },
        { stationName: "Jama Masjid", distance: "2.3" },
        { stationName: "Delhi Gate", distance: "3.7" },
        { stationName: "ITO", distance: "5.0" },
        { stationName: "Mandi House", distance: "5.8", connected_to: "Blue" },
        { stationName: "Janpath", distance: "7.2" },
        {
            stationName: "Central Secretariat",
            distance: "8.5",
            connected_to: "Yellow",
        },
        { stationName: "Khan Market", distance: "10.6" },
        { stationName: "Jawaharlal Nehru Stadium", distance: "12.0" },
        { stationName: "Jangpura", distance: "12.9" },
        {
            stationName: "Lajpat Nagar",
            distance: "14.4",
            connected_to: "Pink",
        },
        { stationName: "Moolchand", distance: "15.1" },
        { stationName: "Kailash Colony", distance: "16.4" },
        { stationName: "Nehru Place", distance: "17.4" },
        {
            stationName: "Kalkaji Mandir",
            distance: "18.2",
            connected_to: "Magenta",
        },
        { stationName: "Govind Puri", distance: "18.9" },
        { stationName: "Okhla", distance: "20.0" },
        { stationName: "Jasola", distance: "20.9" },
        { stationName: "Sarita Vihar", distance: "22.1" },
        { stationName: "Mohan Estate", distance: "23.3" },
        { stationName: "Tughlakabad", distance: "25.2" },
        { stationName: "Badarpur Border", distance: "26.3" },
        { stationName: "Sarai", distance: "28.8" },
        { stationName: "N.H.P.C. Chowk", distance: "30.4" },
        { stationName: "Mewala Maharajpur", distance: "31.3" },
        { stationName: "Sector 28 Faridabad", distance: "32.5" },
        { stationName: "Badkal Mor", distance: "34.2" },
        { stationName: "Old Faridabad", distance: "35.4" },
        { stationName: "Neelam Chowk Ajronda", distance: "37.0" },
        { stationName: "Bata Chowk", distance: "38.3" },
        { stationName: "Escorts Mujesar", distance: "40.1" },
        { stationName: "Sant Surdas - Sihi", distance: "41.8" },
        { stationName: "Raja Nahar Singh", distance: "43.5" },
    ],
    magenta: [
        {
            stationName: "Janak Puri West",
            distance: "0.0",
            connected_to: "Blue",
        },
        { stationName: "Dabri Mor - Janakpuri South", distance: "2.0" },
        { stationName: "Dashrath Puri", distance: "3.1" },
        { stationName: "Palam", distance: "4.6" },
        { stationName: "Sadar Bazaar Cantonment", distance: "7.2" },
        { stationName: "Terminal  IGI Airport", distance: "8.9" },
        { stationName: "Shankar Vihar", distance: "10.7" },
        { stationName: "Vasant Vihar", distance: "12.8" },
        { stationName: "Munirka", distance: "14.0" },
        { stationName: "RK Puram", distance: "15.4" },
        { stationName: "IIT Delhi", distance: "16.3" },
        {
            stationName: "Hauz Khas",
            distance: "17.5",
            connected_to: "Yellow",
        },
        { stationName: "Panchsheel Park", distance: "19.0" },
        { stationName: "Chirag Delhi", distance: "19.9" },
        { stationName: "Greater Kailash", distance: "20.8" },
        { stationName: "Nehru Enclave", distance: "22.1" },
        {
            stationName: "Kalkaji Mandir",
            distance: "23.0",
            connected_to: "Violet",
        },
        { stationName: "Okhla NSIC", distance: "23.8" },
        { stationName: "Sukhdev Vihar", distance: "24.9" },
        { stationName: "JAMIA MILLIA ISLAMIA", distance: "26.1" },
        { stationName: "Okhla Vihar", distance: "26.6" },
        { stationName: "Jasola Vihar Shaheen Bagh", distance: "28.4" },
        { stationName: "Kalindi Kunj", distance: "29.8" },
        { stationName: "Okhla Bird Sanctuary", distance: "31.4" },
        {
            stationName: "Botanical Garden",
            distance: "33.1",
            connected_to: "Blue",
        },
    ],
    pink: [
        { stationName: "Majlis Park", distance: "0.0" },
        { stationName: "Azadpur", distance: "2.1", connected_to: "Yellow" },
        { stationName: "Shalimar Bagh", distance: "3.7" },
        {
            stationName: "Netaji Subash Place",
            distance: "5.1",
            connected_to: "Red",
        },
        { stationName: "Shakurpur", distance: "6.3" },
        { stationName: "Punjabi Bagh West", distance: "7.7" },
        { stationName: "ESI BASAI DARAPUR", distance: "10.2" },
        {
            stationName: "Rajouri Garden",
            distance: "11.3",
            connected_to: "Blue",
        },
        { stationName: "Maya Puri", distance: "12.8" },
        { stationName: "Naraina Vihar", distance: "14.3" },
        { stationName: "Delhi Cantt", distance: "16.1" },
        { stationName: "Durgabai Deshmukh South Campus",distance: "19.7",},
        { stationName: "Sir Vishweshwaraiah Moti Bagh", distance: "21.0" },
        { stationName: "Bhikaji Cama Place", distance: "22.6" },
        { stationName: "Sarojini Nagar", distance: "23.8" },
        {
            stationName: "Dilli Haat INA",
            distance: "24.9",
            connected_to: "Yellow",
        },
        { stationName: "South Extension", distance: "26.1" },
        {
            stationName: "Lajpat Nagar",
            distance: "27.7",
            connected_to: "Violet",
        },
        { stationName: "Vinobapuri", distance: "29.1" },
        { stationName: "Ashram", distance: "30.3" },
        { stationName: "Sarai Kale Khan Hazrat Nizamuddin", distance: "32.2" },
        {
            stationName: "Mayur Vihar Phase-1",
            distance: "35.8",
            connected_to: "Blue",
        },
        { stationName: "Mayur Vihar Pocket I", distance: "36.6" },
        { stationName: "Trilokpuri Sanjay Lake", distance: "37.9" },
        { stationName: "Vinod Nagar East", distance: "38.7" },
        { stationName: "Mandawali - West Vinod Nagar", distance: "39.3" },
        { stationName: "IP Extension", distance: "40.3" },
        {
            stationName: "Anand Vihar",
            distance: "41.9",
            connected_to: "Blue",
        },
        {
            stationName: "Karkarduma",
            distance: "42.9",
            connected_to: "Blue",
        },
        { stationName: "Karkarduma Court", distance: "44.0" },
        { stationName: "Krishna Nagar", distance: "44.7" },
        { stationName: "East Azad Nagar", distance: "45.7" },
        { stationName: "Welcome", distance: "46.8", connected_to: "Red" },
        { stationName: "Jaffrabad", distance: "48.0" },
        { stationName: "Maujpur", distance: "49.1" },
        { stationName: "Gokulpuri", distance: "50.4" },
        { stationName: "Johri Enclave", distance: "51.7" },
        { stationName: "Shiv Vihar", distance: "52.6" },
    ],
    aqua: [
        {
            stationName: "Noida Sector 52",
            distance: "0.0",
            connected_to: "Blue",
        },
        { stationName: "Noida Sector 50", distance: "1.3" },
        { stationName: "Noida Sector 76", distance: "2.3" },
        { stationName: "Noida Sector 101", distance: "3.4" },
        { stationName: "Noida Sector 81", distance: "4.3" },
        { stationName: "NSEZ", distance: "6.3" },
        { stationName: "Noida Sector 83", distance: "7.4" },
        { stationName: "Noida Sector 137", distance: "8.9" },
        { stationName: "Noida Sector 142", distance: "10.5" },
        { stationName: "Noida Sector 143", distance: "11.5" },
        { stationName: "Noida Sector 144", distance: "12.9" },
        { stationName: "Noida Sector 145", distance: "14.1" },
        { stationName: "Noida Sector 146", distance: "15.8" },
        { stationName: "Noida Sector 147", distance: "17.3" },
        { stationName: "Noida Sector 148", distance: "18.9" },
        { stationName: "Knowledge Park II", distance: "21.4" },
        { stationName: "Pari Chowk Greater Noida", distance: "22.5" },
        { stationName: "Alpha  Greater Noida", distance: "23.4" },
        { stationName: "Delta  Greater Noida", distance: "24.9" },
        { stationName: "GNIDA Office", distance: "26.2" },
        { stationName: "Depot Greater Noida", distance: "27.1" },
    ],
    gray: [
        { stationName: "Dwarka", distance: "0.0", connected_to: "Blue" },
        { stationName: "Nangli", distance: "1.5" },
        { stationName: "Najafgarh", distance: "3.9" },
    ],
};

var config = {
    red: ["pink", "violet", "green", "yellow"],
    yellow: ["pink", "violet", "orange", "blue", "magenta", "rapid", "red"],
    blue: [
        "orange",
        "gray",
        "magenta",
        "pink",
        "green",
        "yellow",
        "violet",
        "aqua",
    ],
    orange: ["yellow", "blue"],
    green: ["red", "blue"],
    rapid: ["yellow"],
    violet: ["yellow", "blue", "pink", "magenta"],
    magenta: ["blue", "yellow", "violet"],
    pink: ["yellow", "red", "blue", "violet"],
    aqua: ["blue"],
    gray: ["blue"],
};

function dfs(lineData, sourceLine, destLine, ans, isVisited) {
    isVisited.push(sourceLine);
    if (sourceLine == destLine) {
        ans.push([...isVisited].toString());
    } else {
        for (var i = 0; i < lineData.length; i++) {
            if (isVisited.includes(lineData[i])) {
                continue;
            }
            dfs(config[lineData[i]], lineData[i], destLine, ans, isVisited);
        }
    }
    isVisited.pop();
}

function getRoute(sourceLine, destLine, minimunInterchange) {
    let allRoutes = [],
        minimunInterchangeRoutes = [];
    dfs(config[sourceLine], sourceLine, destLine, allRoutes, []);
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

        // console.log(pathOne, destObj);

        !destObj && getPath(station, pathTwo, destStation, destObj, distance) && middleStations.push(...pathTwo);
    }

    if((sourceObj && !destObj) || (!sourceObj && destObj)) {
        distance.length = 0;
        distance.push(parseFloat(middleStations[middleStations.length - 1].distance) > parseFloat(middleStations[0].distance) ? parseFloat(middleStations[middleStations.length - 1].distance) - parseFloat(middleStations[0].distance) : parseFloat(middleStations[0].distance) - parseFloat(middleStations[middleStations.length - 1].distance));
    }
}

function getRouteInfo(stationsList, sourceStation, destStation, sourceLine, temp) {
    // console.log(sourceStation, destStation);

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

var commonStationConfig = {
    blue_orange: ['Dwarka Sector 21'],
    blue_gray: ['Dwarka'],
    blue_magenta: ['Janak Puri West', 'Botanical Garden'],
    blue_pink: ['Rajouri Garden', 'Mayur Vihar Phase-1', 'Anand Vihar', 'Karkarduma'],
    blue_green: ['Kirti Nagar'],
    blue_yellow: ['Rajiv Chowk'],
    blue_violet: ['Mandi House'],
    blue_aqua: ['Noida Sector 52'],
    magenta_violet: ['Kalkaji Mandir'],
    magenta_yellow: ['Hauz Khas Enclave'],
    pink_yellow: ['Azadpur', 'INA'],
    pink_red: ['Netaji Subash Place', 'Welcome'],
    pink_violet: ['Lajpat Nagar'],
    green_red: ['Inderlok'],
    yellow_red: ['Kashmere Gate'],
    yellow_Violet: ['Kashmere Gate', 'Central Secretariat'],
    yellow_rapid: ['Sikandarpur'],
 };

function getSmallestPath(arr, sourceStation, destStation, tempArr, final, count) {
    for(var i=0; i<arr.length; i++) {
        var distance = getRouteInfo(finalData[tempArr[tempArr.length - 1].line], tempArr[tempArr.length - 1].station, arr[i].station, null, true);

        count += distance;
        arr[i].count = distance;
        tempArr.push(arr[i]);
        if(arr[i].station == destStation) {
            tempArr[1].station == sourceStation && tempArr.shift(); // to remove redunsant element
            tempArr.push({count});
            final.push([...tempArr]);
            for(var i=tempArr.length - 1; i>=0; i--) {
                if(tempArr[i].div && tempArr[i].div.length > 1) {
                    break;
                } else {
                    tempArr.pop();
                }
            }
            return true;
        }
        arr[i].div && getSmallestPath(arr[i].div, sourceStation, destStation, tempArr, final, count);
    }
}

function getCommonStations(routeInfo, sourceStation, destStation) {
    // console.log('====', routeInfo);

    // route = [gray, blue, magenta]
    // sourceStation = 'Najafgarh
    // destStation = 'Palam'
    // arr = [['Najafgarh], ['Dwarka'], ['Janak Puri West', 'Botanical Garden'], ['Palam']]
    // arr = [['Najafgarh], ['Dwarka'], ['Rajouri Garden', 'Mayur Vihar', 'Anand Vihar', 'Karkarduma'], ['Shakurpur']]
    // arr = [['Shalimar Bagh'], ['Rajouri Garden', 'Mayur Vihar', 'Anand Vihar', 'Karkarduma'], ['Noida Sector 52'], ['NSEZ']]

    var arrOneArr = [],
        index = null,
        temper = [],
        zoom = [],
        finalArray = [];

    arrOneArr.push({
        station: [sourceStation],
        line: routeInfo[0]
    });
    for(var i=0; i<routeInfo.length - 1; i++) {
        arrOneArr.push({
            station: commonStationConfig[routeInfo[i]+'_'+routeInfo[i+1]] || commonStationConfig[routeInfo[i+1]+'_'+routeInfo[i]],
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

    var ff = [
        {
            station: destStation,
            line: routeInfo[routeInfo.length - 1]
        }
    ]

    zoom.push(ff);

    for(var i=arrOneArr.length - 2; i>=0; i--) {
        for(var j=0; j<arrOneArr[i].station.length; j++) {
            temper.push({
                station: arrOneArr[i].station[j],
                line: arrOneArr[i].line,
                ...(i >= index && {div : zoom[zoom.length - 1]})
            })
        }
        if(i >= index) {
            zoom.push([...temper]);
        } else {
            finalArray.push(...temper);
        }

        temper.length = 0;
    }

    finalArray.push(...zoom[zoom.length - 1]);

    // console.log(JSON.stringify(finalArray, null, 2));

    var finalResponse = {};

    var final = [];
    var temp = [finalArray[0]];
    getSmallestPath(finalArray, sourceStation, destStation, temp, final, 0);

    var result = null,
        totalCount = 300;

    for (const element of final) {
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

    // console.log(finalResponse);

    return finalResponse;
    // return {
    //     gray: ["Najafgarh", "Dwarka"],
    //     blue: ["Dwarka", "Janak Puri we"],
    //     magenta: ["Janak Puri we", "Palam"],
    // }
}
// getCommonStations(['gray', 'blue', 'magenta'],'Najafgarh','Palam');
// getCommonStations(['gray', 'blue', 'pink'],'Najafgarh','Shakurpur');
// getCommonStations(['pink', 'blue', 'aqua'],'Shalimar Bagh','NSEZ');
// getCommonStations(['gray', 'blue', 'pink', 'red'],'Najafgarh','Shahdara');

// gray->blue->yellow->rapid
function main(sourceStation, destStation, sourceLine, destLine, minimunInterchange) {
    var stationsList = null,
        res = null;
    if(sourceLine == destLine) {
        stationsList = finalData[sourceLine];
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
        // console.log(res);
        var commonnStation = getCommonStations(res[0], sourceStation, destStation);
        var routeStation = {},
            distance = 0,
            totalStops = 0;
        for (const [key, value] of Object.entries(commonnStation)) {
            var routeInfo =  getRouteInfo(finalData[key], value[0], value[1], key, false);
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
    // console.log(res);
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

