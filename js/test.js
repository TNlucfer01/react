// he:
// console.log(hello);
// var hello=10;
// //!.whats a name space 

// function foo() {
//   var x = 1;
//   function bar() {
//      y = 2;
//     console.log(x); // 1 (function `bar` closes over `x`)
//     console.log(y); // 2 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }

// foo();

let a =0;
setTimeout(()=>{console.log("hello world "),2000});
function func()
{
  for(let i = 1;i>10e9;i++){
  a+=i;
}
}

func();


