//ES6
import a,{add as sum, sub as diff} from "./exports.js"

console.log(a);
console.log(sum(a.a,a.b));
console.log(diff(a.a,a.b));


//common js 

let a =require("./exports.js")
