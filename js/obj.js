
let wheelobj={
    rim_color:"red",
    tire:"mrf",
    Each:2000
};

let car ={
    brand:"BMW",
    seat:4,
    wheel:wheelobj,
};
let text="";
for(let a in car){
    text+=car[a]+ " ";

}
// usif the object entries
 // for(let [key,value] of Object.entries(car)){
   // document.writeln(key+": "+value);
//}





//document.getElementById("hell").innerHTML=text;

function person(first,last,age,eye){
    this.first=first,
    this.last=last,
    this.age=age,
    this.eye=eye
}
person.prototype.func=function(){
   // document.writeln("hello world");
}

// what is a prototype
person.prototype.hello="hello";
const p1= new person("hello","who ami ",50,"blue");
person.prototype.hello="hello";
/document.getElementById("hello").innerHTML=JSON.stringify(p1);
//this seems fishy 
/**for(a in p1){
    document.writeln(a+": "+p1[a]+"<br>");
} */

const p2=new person("hello","who ami ",50,"blue");
let tet=JSON.stringify(p1)+JSON.stringify(p2);
//document.writeln(tet)
//document.writeln(tet.slice(-7));

let hello ="      hello      ";
let t = hello.trimStart();
//document.writeln(t t.length);

console.log(p2 instanceof person);

