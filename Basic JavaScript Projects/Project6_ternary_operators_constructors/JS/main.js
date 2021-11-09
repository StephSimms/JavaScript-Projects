// this is Challenge 8
function myFunction() {
    let age = document.getElementById("age").value; let voteable = (age < 18) ? "You are not old enough. ":"You can vote!";
    document.getElementById("age1").innerHTML = voteable;
}

//this is Assignment 37
const person = {
    firstName: "Lucky ",
    lastName: " Simms",
    id:5566,
    fullName : function() {
        return this.firstName + "" + this.lastName;
    }
};

document.getElementById("this").innerHTML= person.fullName();

//this is Challenge #9
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person ("Lucky", "Simms", 1, "brown");

document.getElementById("object").innerHTML = "My dog is " + myFather.age + ".";

// this is Assignment #38
document.getElementById("nested").innerHTML = add();
    function add() {
        let counter = 10;
        function plus () {counter +=2;}
        plus();
        return counter;
    }