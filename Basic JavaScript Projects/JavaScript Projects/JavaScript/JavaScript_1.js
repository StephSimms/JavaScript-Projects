//this is Assignment #57
function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//this is Assignment #58
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(50, 50, 250, 200);

//this is Assignment #58
var d = document.getElementById("myCanvas_1");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);


//this is Challenge #18
