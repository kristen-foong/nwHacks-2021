const infectionData = require('./data/covid19-data.json')
const vaccineData = require('./data/vaccine-distribution-data.json')

// Creates a local array based upon data read in constructor
// Returns specific information related to infectionData
function returnInfectionData(provinceName) {
    dayANDinfection = [] // arrays of ((day, infection)...)

    var size = Object.keys(infectionData).length; // find size of JSON object
    var i; // loop iterator
    for (i=0; i < size; i++) {
        if (infectionData[i].prname == provinceName) {
            // create array to store (day, infection)
            var singlePoint = [];
            singlePoint.push(infectionData[i].date); // get date
            singlePoint.push(infectionData[i].numconf); // get confirmedCases
            dayANDinfection.push(singlePoint); // add to array
        }
    }
    return dayANDinfection;     
}

// Creates a local array based upon data read in constructor
// Returns specific information related to infectionData
function returnVaccineData(provinceName) {
    dayANDvaccines = []; // array of ((day, vaccines distributed)...)

    var size = Object.keys(vaccineData).length; // find size of JSON object
    var i; // loop iterator
    for (i=0; i < size; i++) {
        if (vaccineData[i].province = provinceName) {
            // create array to store (day, vaccines distributed)
            var singlePoint = [];
            singlePoint.push(vaccineData[i].date_vaccine_distributed); // get date
            singlePoint.push(vaccineData[i].cumulative_dvaccine); // get distributions
            dayANDvaccines.push(singlePoint); // add to array
        }
    }
    return dayANDvaccines;
}

// Additional functions
console.log(returnInfectionData("Yukon"));