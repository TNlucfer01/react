//basic arrowf function 
let hello =()=>{
    console.log("hello");
}
//bind and the this in arrow function 

hello()
//single line arrow function 
const cube =(x,y)=> y*x*x;

function a(){
console.log("hello worls ")
}
let a2 =a;

console.log(cube(6,2));
//default
const quest=(x=10)=> x*x;

console.log(quest())

//object litreals

const obj_literals=(a,b,c)=>  
({
    rim_color:a,
    tire:b,
    Each:c
});
//onject literals 
console.log(obj_literals("a","b","c"));
const makePerson = (firstName, lastName) =>
({first: firstName, last: lastName});
console.log(makePerson("Pankaj", "Bind"));

//async arrow function 

a2();

//IIFE

//strange function
let abcd=(a2(),a())
console.log(abcd+"log")


// const obj = {
//     name: 'Aathi',
//     fun: function(){
//         console.log('hello', this.name)
//     },
//     arrowFun: () => {
//         console.log('test',this.name)
//     }
// }

// obj.fun();
// obj.arrowFun()


import {a as test } from "./anonyms.js"
test()