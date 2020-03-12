
class Squares {
    constructor(squareNum, squareColor) {
        this.square = squareNum;
        this.color = squareColor
    }
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
  
      context.fillRect(20,20,100,100);
      context.clearRect(40,40,60,60);
      context.strokeRect(45,45,50,50);
    }
  }


function makeSquares() {
    let totalSquares = 8
    var canvas = document.getElementById('canvas');
    for (let i = 1; i <= totalSquares; i++){
        //create a square with width 150px and height 150px
        // assign it a random value starting from one, ending at 8
        // assign it a color depending on the value 
        if (canvas.getContext) {
            var context = canvas.getContext('2d');

            context.fillRect(20,20,100,100);
            context.clearRect(40,40,60,60);
            context.strokeRect(45,45,50,50);
        }
    }
}

makeSquares();