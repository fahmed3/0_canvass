var c = document.getElementById("slate");
var clearButton = document.getElementById("clr");
var newLineButton = document.getElementById("new");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineTo(x,y);
    //ctx.moveTo(x-7,y); //x-7 is NaN
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x,y,14, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0,0,c.width,c.height);
}

var newPath = function(){
    ctx.beginPath();
}

c.addEventListener("click", draw);
clearButton.addEventListener("click", clear);
newLineButton.addEventListener("click", newPath);

