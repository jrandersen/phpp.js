/**
 * Creates base Material
 * @param  {String} id identification of model element/guid for future
 * @param  {String} name The material Name
 * @param  {String} uValue The material U-Value for future calculation
 */
class Material {
    constructor(id, name, uValue) {
        this.id = id;
        this.name = name;
        this.uValue = uValue;
    };
    getRvalue() {
        return 1/this.uValue
    }
};


/**
 * Extends a material to a single continious material thickness
 * @param  {String} thickness The overall material thickness
 * inherits all properties and methods above
 */
class SingleMat extends Material {
    constructor(id, name, uValue, thickness){
        super(id, name, uValue, thickness)
        this.thickness = thickness;
    };
};


/**
 * Extends a material to a Multi material element with a percentage of inclusion
 * @param  {String} percent The amount (percentage) of this material is contained in the wall
 * for precise definition please see PHI https://passivehouse.com/04_phpp/04_phpp.htm#PH9 
 * inherits all properties and methods above
 */
class MultiMat extends Material {
    constructor(id, name, uValue, percent ){
        super(id, name, uValue, percent)
        this.percent = percent;
    };     
};


/**
 * Create a compound material Array of two or three Multi Materials
 * @param  {Array} compoundMatArr An array of two or three MultiMats elements
 * @param  {Number} This is the overall width of this compound material
 */
class CompoundConstruction {
    constructor(compoundMatArr, thickness) {
        this.compoundMatArr = compoundMatArr
        this.thickness = thickness;
    };
};


/**
 * Create a wall element with materials and generates full width based on material thyickness
 * @param  {String} id identification of model element/guid for future
 * @param  {String} name The name of the wall
 * @param  {Number} length The full length of the wall
 * @param  {Number} height The full height of the wall
 * @param  {Array} matArr An array that contain all SingleMat's and CompoundConstructions of the wall
 * @method {matThickness} Calculates the overal thickness based on construction.
 * @returns {Number} sum Is the wall width
 */
class Wall {
    constructor(id, name, length, height, matArr){
        this.id = id;
        this.name = name;
        this.construction = matArr;
        this.length = length;
        this.width = this.matThickness();
        this.height = height;  
    };
    matThickness(width){
      let sum = 0;
      for (let i = 0; i < this.construction.length; i++) {
        const element = this.construction[i];
        sum += element.thickness;
      };
      return sum;
    };    
};


/**
 * Create an area element
 * @param  {String} id identification of model element/guid for future
 */
class Area {
    constructor(id, length, width){
        this.id = id;
        this.length = length;
        this.width = width;
    };
};



exports.Wall = Wall;
exports.Area = Area;
exports.Material = Material;
exports.SingleMat = SingleMat;
exports.MultiMat = MultiMat;
exports.CompoundConstruction = CompoundConstruction;