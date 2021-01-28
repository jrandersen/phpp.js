class Material {
    constructor(uValue, thickness, percentDistribution) {
        this.uValue = uValue;
        this.thickness = thickness;
        this.percentDistribution = percentDistribution;
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
        sum += this.construction[i].thickness;
      }
      return sum
    }    
};

class Area {
    constructor(id, length, width){
        this.id = id;
        this.length = length;
        this.width = width;
    }
}



exports.Wall = Wall
exports.Area = Area
exports.Material = Material