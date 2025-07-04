let items=[];
let v1=document.querySelector("#inner");
let v2=document.getElementsByTagName("div");
let v3=document.getElementById("middle");
v1.addEventListener("click",()=>{
    console.log(" the inner    div is clicked ");

})
v2.addEventListener("click",()=>{
    console.log(" the outer div id clicked ");
})
v3.addEventListener("click",()=>{
    console.log("the middle div clicked ");
})