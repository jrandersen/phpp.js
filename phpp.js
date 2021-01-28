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

//materials
const basicMat0 = new element.Material(0.0233, 6, 100);
const basicMat1 = new element.Material(0.134, 12, 100);
const basicMat2 = new element.Material(0.545, 1.75, 100);
const matArr = [basicMat0, basicMat1];

//wall
const wall = new element.Wall('8769876id', 10,8, matArr);

//areas and refdims
const area = new element.Area('557865id', 10, 20)

console.log(wall,);

