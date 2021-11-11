//this is a loop
let text = ""
let i = 0;
while (i < 10 ) {
    text += "<br>The number is " + i;
    i++;
}
    document.getElementById("while").innerHTML = text;

//this is a string length property
let text1 = " Good Day ";
    document.getElementById("string").innerHTML = text1.length;;

//this is a for loop
let text2 = "";

for (let a = 0; a < 5; a++) {
  text2 += "The number is " + a + "<br>";
}

document.getElementById("forloop").innerHTML = text2;

//this is an array
const cars = ["Honda", "Acura", "Subaru"];
    document.getElementById("array").innerHTML = cars;

//this is Assignment #53
const car = {type:"Honda", model:"Odyssey", color:"silver"};
    car.owner = "Stephanie";
    car.price = "$40,000";
    car.color = "black";

function constant_function() {
    document.getElementById("Constant").innerHTML = "Car color is " + car.color;
}

//this is Assignment #54
var d = 15;
document.write(d);
{
    let d = 10;
    document.write("<br>" + d);
}
document.write("<br>" + d);
document.getElementById("let").innerHTML= d;

//this is Assignment #55

let car2 = {
    make: "Honda ",
    model: "Pilot ",
    year: "2021 ",
    color: "blue ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }    
};
    document.getElementById("Car_Object").innerHTML = car2.description();

    //this is Challenge #15
let text3 = "";
    for (let i = 5; i < 20; i ++) {
    if (i === 9) {break;}
    text3 += "The number is " + i + "<br>"
    }
    document.getElementById("break").innerHTML = text3;

let text4= "";
    for (let c = 10; c < 30; c++) {
        if (c === 13) {continue;}
        text4 += "The number is " + c + "<br>";
    }
    document.getElementById("continue").innerHTML = text4;

//this is a while loop used within a function
function count() {
    var Digit ="";
    var y= 10;
    while (y < 109) {
        Digit += "<br>" + y;
        y++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

//this is a for loop within a function
var Ingredients = ["Cheese", "Flour", "Sauce", "Pepperoni", "Bacon", "Ham"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Ingredients.length; Y++){
    Content += Ingredients[Y] + "<br>";
    }
    document.getElementById("List_of_Ingredients").innerHTML = Content;
}


    