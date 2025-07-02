
//all the async function returs the promise by default 
async function name() {
    console.log("hello world");
    return "hello";
}

name().then((value)=>{console.log(value)})


//await waits for a promise to be resolved or rejected
function func(){

    return new Promise((res, rej)=>{
        setTimeout(() => {
    console.log(" hello this is testing of th await keyword ");
}, 2000);
        false?res("this is res"):rej("this  is reject");
    })
}



let a=async ()=>{
   try {
     let result=await func();
    console.log(result);
   } catch (error) {
    console.log(" something went wrong ");
   }
}

a()
