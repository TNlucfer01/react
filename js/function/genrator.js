function* test(){
    console.log(" hello 1")
    yield 1;
    console.log("hello again")
    yield 2;
    console.log("hello gain man ")
    do {
        yield 1;
    }while (true);
}


let func=test();
console.log(func.next());
console.log(func.next());
console.log(func.next());
console.log(func.next());

console.log(func.next());
console.log(func.next());
console.log(func.next());
console.log(func.next());



