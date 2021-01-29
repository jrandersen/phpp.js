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

// single Material
const single = new element.SingleMat('87656776id','Plywood',0.0233,1)

//multi material
const mat1 = new element.MultiMat('87656776id','Studs',1.233,20)
const mat2 = new element.MultiMat('87656776id','Insulation',0.300,80)

//compound construction
const compcon = new element.CompondConstruction([mat1, mat2], 8)
const matArr = [single, compcon, single]
//wall
const wall = new element.Wall('8769876id','wall1',10,8,matArr);

//areas and refdims
const area = new element.Area('557865id', 10, 20)

console.log(wall);

