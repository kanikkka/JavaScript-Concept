console.log("learning loops coccept")

let a=1;
console.log(a);
console.log(a++);
 //we have five type of loops 

// 1. for loop
for(let i=0; i<6; i++){
    console.log(i);
}
// 2. for in loop
let obj={
    name:"kanika",
    role:"developer",
    surname:"rajput"
}
for(const key in obj){
    const element=obj[key]
    console.log(key,element)
}
for(const key in obj){
    console.log(key)
}
// 3.for of loop
for(const iterator of "kanika"){
    console.log(iterator)

}
// 4.while loop
i=5;
while(i>0){
    console.log(i);
    i--;
}
// 5. do while loop
i=5;  //ek baar to ye chlta he h baad m condiiton check hote h
do{
    console.log(i);
    i--;
}
while(i>0);
