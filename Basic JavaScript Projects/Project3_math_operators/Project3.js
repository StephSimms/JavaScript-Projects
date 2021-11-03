//add function
function addFunction() {
    var z = 4+4;
    document.getElementById("add").innerHTML = z;
}

//subtract function
function subtractFunction() {
    var a = 10-6;
    document.getElementById("subtract").innerHTML = a;
}

//multiply function
function multiplyFunction() {
    var b = 2*9;
    document.getElementById("multiply").innerHTML = b;
}

//division function
function divisionFunction() {
    var c = 25/5;
    document.getElementById("division").innerHTML = c;
}

//modulus function
function modulusFunction() {
    let x = 10;
    let y = 5;
    let z = x % y;
    document.getElementById("modulus").innerHTML = z;
}

//increment function
function incrementFunction() {
    let x = 12;
    x++;
    let z = x;
    document.getElementById("increment").innerHTML = x;
}

//decrement function
function decrementFunction() {
    let x = 100;
    x--;
    let z = x;
    document.getElementById("decrement").innerHTML = z;
}

//this is math random to return a random number
    document.getElementById("mathrandom").innerHTML = Math.random();
