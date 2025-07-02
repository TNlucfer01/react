
//spread 
//use this whenenver we are using the math modules 
//for copy obj,files 
let ab =[[1,2,3,4,5],[1,2,4,5]]
let b=[...ab]
//for passing the array as the arguments for a function 
// merging the array,obj 
let aq =[[1,2,3,4,5],[1,2,4,5]]
console.log(...aq,b,"")
let c=[...b,...ab];
console.log(c)

let wheelobj={
    rim_color:"red",
    tire:"mrf",
    Each:2000
}
let aa={...wheelobj,a:12};
console.log(aa)

//funtion arguments passing 
bc=[1,2,4,3,5]
console.log(Math.min(...bc))

//rest
let rest =(...args)=>
{
 //it returns a function that will print the logs of the given array 
    return  ()=>{
        console.log(args)
    };
}


let temp=rest([1,2,3,4])
console.log(temp())

//destructing or restructing of the variable 
//can be appiled to the array or the object funtion ?
//simular to the tuple unpacking form the python 
let { a,...res}=aa;
console.log(a,res)

//destructing the array 
let [q,s,d,f]=[1,2,3,4]
console.log(q)
let [w,...e]=[1,2,3,4]
//what does the + means in  the console.log
//means its  concating the string 
console.log(e+w)


let obj={
    //deprecated ?
    name:"aathi",
    add:{
        city:"penndam",
        street:"south",
        door_no:"2/57",
        native:"thuraiyur"
        ,house:{
            tye:"groom",
        }
    },
    age:20
}

let {name}=obj;
console.log(name)

let {add:{city:abcd}}=obj;
console.log(abcd)
let {add:{house:{tye:As}}}=obj

console.log(As)