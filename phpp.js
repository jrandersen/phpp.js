const sheetjs = require('xlsx');
const element = require('./buildingElements.js')

// file management
const mainFile = "../main_phpp/2007_SI_unpop.xlsx"

// read mainfile 
const phppwb = sheetjs.readFile(mainFile);
const phppSheets = phppwb.SheetNames;

// all sheets
const phppVerification = phppwb.Sheets["Verification"];
const phppAreas = phppwb.Sheets["Areas"];
const phppUlist = phppwb.Sheets["U-Lists"];
const phppUvalues = phppwb.Sheets["u-Values"];
const phppGround = phppwb.Sheets["Ground"];
const phppWindows = phppwb.Sheets["Windows"];

// make new sheet with data
const data = sheetjs.utils.sheet_to_json(phppVerification);
const newData = data.map(function(record){
    return record;
});

// create new excel file with new wooksheet
const newPHPP = sheetjs.utils.book_new();
//const newWSPHPP = sheetjs.utils.json_to_sheet(newData);
//sheetjs.utils.book_append_sheet(newPHPP, newWSPHPP, 'NewName');
//sheetjs.writeFile(newPHPP, "newPHPP.xlsx")


const wall = new element.Wall('8769876id', 10,2,5);
const area = new element.Area('557865id', 10, 20)

console.log(wall, area);

