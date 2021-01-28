class Material {
    constructor(id, uValue, thickness, percentDistribution) {
        this.id = id;
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
        if (this.construction.percentDistribution === 100) {
            sum += this.construction[i].thickness;
            console.log('100', sum)
        }else {
            if (this.construction[i].thickness ===  this.construction[i+1].thickness) {
                sum += this.construction[i].thickness;
                console.log('less than 100', sum)
                continue;
            } 
        }
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