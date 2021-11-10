//this is Assignment #39
let carName = "Honda";
myFunction();

function myFunction() {
  document.getElementById("global").innerHTML = "I can display " + carName;
}

myFunction();

function myFunction() {
  let x = "Tree";
  document.getElementById("local").innerHTML = typeof x + " " + x;
}

document.getElementById("local1").innerHTML = typeof x;

function myFunction(p1, p2) {
    return p1 * p2;
}

document.getElementById("function").innerHTML = myFunction(4,3);

//this is Assignment #40
function myFunction() {
    document.getElementById("color").style.color = "blue";
}

const d = new Date ("November 5, 2021 01:15:00");
    document.getElementById("hours").innerHTML=d.getHours();

//Assignment #41
if (new Date ("November 2, 2021 Date").getHours() < 12) {
    document.getElementById("IF").innerHTML= "Hello There!";
}

//this is Assignment #42
function myFunction() {
    document.getElementById("field2").value = document.getElementById("field1").value;
}

const hour = new Date("October 31, 2021").getHours();
    let greeting;

    if (hour <12) {
        greeting = "Good Day";
    } else {
        greeting = "Good evening";
    }

    document.getElementById("ifelse").innerHTML = greeting;

//this is Assignment #43
const time = new Date().getHours();
    let salutation;
    if (time <8) {
        greeting = "Good Morning";
    } else if (time < 18) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("elseif").innerHTML = salutation;
