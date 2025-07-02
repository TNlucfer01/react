"use strict";
let a="hello world "
console.log("substring:"+ a.substring(-2,6)+a);
console.log("slice:"+ a.slice(2,6)+a);
console.log("substr:"+ a.substr(-2,6));
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.padStart(24,"hello "))
console.log(a.padEnd(24,"hello "))
console.log(a.split("l"))

let hello ="      hello         ";
console.log(hello.trimStart().length);
console.log(hello.trimEnd().length);
console.log(hello.trim().length);
//function dont need the declatotion 
 let fun=(name)=>{
console.log(`hello ,${name}`);

}
fun("athi");