class Material {
    constructor(id, name, uValue, thickness) {
        this.id = id;
        this.name = name;
        this.uValue = uValue;
        this.thickness = thickness;
    }
}

class CompondMaterial {
    constructor(id, name_1, uValue_1, percentDistribution_1, name_2, uValue_2, percentDistribution_2, thickness) {
        this.id = id;
        //material 1
        this.name_1 = name_1;
        this.uValue_1 = uValue_1;
        this.percentDistribution_1 = percentDistribution_1;
        //material 2
        this.name_2 = name_2
        this.uValue_2 = uValue_2;
        this.percentDistribution_2 = percentDistribution_2;
        // overall thickness
        this.thickness = thickness;
    }

}
class Wall {
    constructor(id, length, height, matArr){
        this.id = id;
        this.construction = matArr
        this.length = length;
        this.width = this.matThickness();
        this.height = height;  
    }
    matThickness(width){
      let sum = 0;
      for (let i = 0; i < this.construction.length; i++) {
        const element = this.construction[i];
        sum += element.thickness;
      }
      return sum;
    }    
};

class Area {
    constructor(id, length, width){
        this.id = id;
        this.length = length;
        this.width = width;
    }
}



exports.Wall = Wall;
exports.Area = Area;
exports.Material = Material;
exports.CompondMaterial = CompondMaterial;