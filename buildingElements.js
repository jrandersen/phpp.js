class Wall {
    constructor(id, length, width, height){
        this.id = id;
        this.length = length;
        this.width = width;
        this.height = height;
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