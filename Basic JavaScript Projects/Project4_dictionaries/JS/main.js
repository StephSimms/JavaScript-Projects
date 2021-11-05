// this is Assignment #24

const person = {firstName:"Lucky" , lastName:"Simms" , age: 1, eyeColor:"brown"};
    document.getElementById("objects").innerHTML = person.firstName + " is " + person.age + " years old. " ;

delete person.age;
    document.getElementById("dictionary").innerHTML = person.firstName + " is " + person.age + " years old.";
