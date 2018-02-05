var toggle = 1;
var c = document.getElementById("slate");
var clearButton = document.getElementById("clr");
var toggleButton = document.getElementById("tog");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var draw = function(event) {
    ctx.beginPath();
    var x = event.clientX;
    var y = event.clientY;
    if(toggle > 0){
	ctx.arc(x,y,25, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();
    }
    else{
	ctx.fillRect(x,y, 50,50);
    }
}

var tog = function(){
    toggle *= -1;
}

var clear = function(){
    ctx.clearRect(0,0,c.width,c.height);
}


c.addEventListener("click", draw);
toggleButton.addEventListener("click", tog);
clearButton.addEventListener("click", clear);
