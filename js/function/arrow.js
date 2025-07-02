//for explaining the  this property in the arrow function
const obj = {
    name: 'Aathi',
    fun: function(){
        console.log('hello', this.name)
    },
    arrowFun: () => {
        console.log('test',this.name)
    }
}
let v=10
function func(){
    this.name="aathi";
    function  func2(){
        console.log(this.name);
    }
    func2()
}

let name ="outer block";

function fun(){
     let name="aathi";
     const a=()=> {
        console.log(name);
    }
    a();
}

