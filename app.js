
class Squares {
    constructor(squareNum, squareColor) {
        this.square = squareNum;
        this.color = squareColor
    }
}

var canvas= document.getElementById("canvas");
var ctx = canvas.getContext("2d");

for (i=1; i<=8; i++){
    var x = math.floor(Math.random()*10)
    var y = math.floor(Math.random()*10)

    ctx.fillstyle = "blue";

    ctx.fillRect(x, y, 15, 15);
}
