//diff btw the no name function and the arrow func is that one can use the this binding  and
//  the other is inherut the this form the parent or outer block 
// arguments object	✅ Available for anonyms 	❌ Not available arrow func 


const a =function (){ console.log("hello how are you are you fine ")};
const greet1 = function() {
  console.log("Hi from anonymous!");
};
a()
//whenevr we use a funtion inside a  obj literals alway make them in the return block 

function w(name){
    return{
    name:name,
    funt:function(){
        console.log("hello"+this)
    }};
}

module.exports={a};