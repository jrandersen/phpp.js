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
        const element = this.construction[i];
        const nextElement = this.construction[i+1];
        console.log(nextElement)
        if (element.percentDistribution === 100) {
            sum += element.thickness;
            console.log('100', sum);
        }else{
            sum += element.thickness;
            console.log('less than 100', sum);
        }
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



exports.Wall = Wall
exports.Area = Area
exports.Material = Material