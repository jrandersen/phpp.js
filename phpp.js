const sheetjs = require('xlsx');
const element = require('./buildingElements.js')


//-----------------------
/**
 * File instantiation
 * uses sheet.js
 */
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


//-----------------------
/**
 * Wall Material instantiation
 * class SingleMat for layer of wall that are continious
 * class MultiMat for layer that are not continuious like studs and insulation
 * class CompoundContsrcution is creating arrays of MultiMats and assiging a width
 */

 //single material
const single = new element.SingleMat('87656776id','Plywood',0.0233,1)

//multi material
const mat1 = new element.MultiMat('87656776id','Studs',1.233,20)
const mat2 = new element.MultiMat('87656776id','Insulation',0.300,80)

//compound construction (takes and array of two or three multimaterial class plus an overall width)
const compcon = new element.CompoundConstruction([mat1, mat2], 8)
const matArr = [single, compcon, single]

//wall element
const wall = new element.Wall('8769876id','wall1',10,8,matArr);

console.log(wall);