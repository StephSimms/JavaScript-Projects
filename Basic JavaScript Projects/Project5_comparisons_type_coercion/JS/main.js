//this is the document write method

document.write("<h1>Hello World!</h1><p>Have a nice day</p>");
document.getElementById("typeof").innerHTML = typeof {name:'Steph' , age:41} + "<br>" + typeof [1,2,3,4] + "<br>" + typeof null + "<br>" + typeof function myFunc(){};


//this is NaN function

let x = Number.NaN; 
    document.getElementById("NaN").innerHTML = x;

//this is Challenge #6 

function myFunction() {
    var res = "";
  res = res + isNaN(123) + ": 123<br>";
  res = res + isNaN(-1.23) + ": -1.23<br>";
  res = res + isNaN(5-2) + ": 5-2<br>";
  res = res + isNaN(0) + ": 0<br>";
  res = res + isNaN('123') + ": '123'<br>";
  res = res + isNaN('Hello') + ": 'Hello'<br>";
  res = res + isNaN('2005/12/12') + ": '2005/12/12'<br>";
  res = res + isNaN('') + ": ''<br>";
  res = res + isNaN(true) + ": true<br>";
  res = res + isNaN(undefined) + ": undefined<br>";
  res = res + isNaN('NaN') + ": 'NaN'<br>";
  res = res + isNaN(NaN) + ": NaN<br>";
  res = res + isNaN(0 / 0) + ": 0 / 0<br>";
  res = res + isNaN(null) + ": null<br>";


document.getElementById("NaN").innerHTML = res;
}

//this is Infinity and -Infinity

function myFunction() {
    document.getElementById("Infinity").innerHTML = 1.7976931348623157E+10308 + "<br>" + -1.7976931348623157E+10308;
}

//this is Boolean Logic

document.getElementById("Boolean").innerHTML = Boolean(11 > 15);

// this is the console.log() function

console.log("14-5=9");

//this is type coercion Assignment #30

let a = 456;
    document.getElementById("typecoercion").innerHTML = x.toString() + "<br>" + (456).toString() + "<br>" + (400 +56).toString;

//Challenge #7

document.getElementById("false").innerHTML = Boolean(45 < 100);

// this is Assignment #31 ==
let b = 5;
    document.getElementById("comparisons").innerHTML = (b == 10);

let c = 5;
    document.getElementById("comparisons1").innerText = (c == 5);


//this is Assignment 32
let d = "10";
    document.getElementById("true").innerHTML = (d == 10);

let e = 25;
    document.getElementById("false1").innerHTML = (e === 21);

let f = "25";
    document.getElementById("false2").innerHTML = (f == 25);

//this is Assignment 33
let g = 9;
let h = 6;
    document.getElementById("operators").innerHTML = (g < 15 && h > 1) + "<br>" + (g < 15 && h < 1);

let i= 12;
let j= 9;
    document.getElementById("operators1").innerHTML = (i == 9 || j == 9) + "<br>" + (i == 12 || j == 0) + "<br>" + (i == 0 || j == 9) + "<br>" + (i == 11|| j == 5);

//this is Assignment 34
let k = 30;
let l = 27;

    document.getElementById("NOT").innerHTML = ! (k===l) + "<br>" + !(k> l);













