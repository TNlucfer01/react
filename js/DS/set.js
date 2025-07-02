let set=new Set([1,2,3,4,5,6,7,8,9,"hello"])


console.log(set.values());
console.log(set.keys());

console.log(set.entries());

console.log(set.size)

set.forEach((v1,v2,v3)=>{
    console.log(v1,v2,v3);
})

//iterator
let iter=set.values();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
let result; 
do {
    result=iter.next()
    console.log(result);

}while(result.done!=true);