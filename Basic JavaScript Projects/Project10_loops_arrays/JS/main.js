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
var a = 15;
document.write(a);
{
    let a = 10;
    document.write("<br>" + a);
}
document.write("<br>" + a);
document.getElementById("let").innerHTML= a;

//this is Assignment #55

let car2 = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }    
};
    document.getElementById("Car_Object").innerHTML = car.description();