class Material {
    constructor(id, name, uValue) {
        this.id = id;
        this.name = name;
        this.uValue = uValue;
    };
};



class SingleMat extends Material {
    constructor(id, name, uValue, thickness){
        super(id, name, uValue, thickness)
        this.thickness = thickness;
    };
};



class MultiMat extends Material {
    constructor(id, name, uValue, percent ){
        super(id, name, uValue, percent)
        this.percent = percent;
    };     
};



class CompondConstruction {
    constructor(compoundMatArr, thickness) {
        this.compoundMatArr = compoundMatArr
        this.thickness = thickness;
    };
};



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
exports.CompondConstruction = CompondConstruction;