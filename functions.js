console.log("learning fucntions")
// function 
function name(parameter){
    console.log("hello")
}
function basic(name){
    console.log("hello"+" "+name)
    console.log("hello rajput"+" "+name)
    console.log("hello ji"+" "+name)
}
basic("kanika")

function sum(a,b){
    console.log(a+b)
}
sum(1,2)

function sum1(a,b){
    return a+b
}
result=sum1(3,4)
console.log(result)

function add(a,b,c=3){
    return a+b+c;
}
result=add(1,2)
console.log(result)

//arrow function
const arrow=(a)=>{
    console.log(a)
}
arrow(22)
arrow(12)
