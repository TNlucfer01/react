/**function task1(){
    console.log(" this is task 1 ");
}
function task2(){
    console.log(" this is task 2 ");
}
function task3(){
    console.log(" this is task 3 ");
}
function task4(){
    console.log(" this is task 4 ");
}
function task5(){
    console.log(" this is task 5 ");
}



task1();
task2();
task3();
task4();
task5(); */
//callback
function func1(){
console.log(" hello world");
}
function func2(a,b){
    console.log(a,b);
    b();
}
func2(10,func1());
//call back hell 
function task1(callback){
    setTimeout(()=>{
    console.log(" this is task 1 ");
    callback()
},2000)
}

function task2(callback){
    setTimeout(()=>{
    console.log(" this is task 2 ");
    callback()
},2000)
}
function task3(callback){
    setTimeout(()=>{
    console.log(" this is task 1 ");
    callback()
},2000)
}
function task4(callback){
    setTimeout(()=>{
    console.log(" this is task 1 ");
    callback()
},2000)
}
function task5(callback){
    setTimeout(()=>{
    console.log(" this is task 1 ");
    callback()
},2000)
}
//callback hell
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log(" all the task are executed ");
                })
            })
        })
    })
});


