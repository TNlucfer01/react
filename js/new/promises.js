// a function is passed as a rgument
// why do we need the  funtions

let promise1 = new Promise((resolve, reject) => {
  let number = 10;
  if (number % 2 == 0) resolve("the number is even ");
  else reject("this is odd number");
});

promise1
  .then(() => console.log("hello world this is then "))
  .catch(() => console.log("this is catch "));

export function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      false ? resolve(" this si task 1 ") : reject(" this is reject");
    }, 2000);
  });
}

//solution to callback hell
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" this si task 2 ");
    }, 2000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" this si task 3 ");
    }, 2000);
  });
}
function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" this si task 4 ");
    }, 2000);
  });
}
function task5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(" this si task 4 ");
      // reject("Something went wrong");
    }, 2000);
  });
}

const getData = async () => {
  try {
    const data = await task5();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData();

task1()
.catch((value) => {
    console.log(value);
    return task2();
  })
  .then((value) => {
    console.log(value);
    return task3();
  })
  .then((value) => {
    console.log(value);
    return task4();
  })
  .then((value) => {
    console.log(value);
    return task5();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

//paralell execution
Promise.all([task1(),task2(),task3()]).then(([r1,r2,r3])=>{
console.log(r1,r2,r3);
}).catch((error)=>{//catch is  sonly one for every error so it get only one value not many error 
  console.log("something went wrong! ",error)
})


//when we want to send a multiple data from the promise then we use the object or wrray to trandfer it out to the promise 
//eg
function returnsfunction(){
return new Promise((resolve)=>{
  resolve({name:"aathi",age:10,gender:"male"})
});
}


returnsfunction().then((value)=>{
  console.log(value);
})