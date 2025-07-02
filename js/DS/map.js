
//key value pair 
const a =  new Map([["a","b"]]);
a.set("name","aathi");
a.set("name1","aathi");
a.set("name3","aathi");
a.set("name2","aathi");

console.log(a)
//getting the value based on the key given
console.log(a.get("name1"))

console.log(a.size);
//for checking heter there is a key for that 
console.log(a.has("aathi"))
//value,key,whole refrence
a.forEach((element,e2,a1) => {
    console.log(element,e2,a1);
});


const map = new Map([
  ["name", "Aathi"],
  ["lang", "JavaScript"]
]);

const iter = map.entries();

console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 