//this is Assignment #39
let carName = "Honda";
myGlobal();

function myGlobal() {
  document.getElementById("global").innerHTML = "I can display " + carName;
}

myLocal();

function myLocal() {
  let x = "Tree";
  document.getElementById("local").innerHTML = typeof x + " " + x;
}



//this is Assignment #43

function myTime() {
    const time = new Date().getHours();
    let greeting;
    if (time <8) {
        greeting = "Good Morning";
    } else if (time < 18) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    } 
    console.log(salutation)
    document.getElementById("elseif").innerHTML = greeting;
}
