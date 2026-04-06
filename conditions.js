console.log("learning conditional")
let age=15;
let grace=2;
console.log(age**grace);
if((age+grace)>=18){
    console.log("you can vote");
}else{
    console.log("you cannot drive");
}
//operators
var a=6;
var b=3;
var c=b+=a;
console.log(c);
console.log("3"==3);
console.log("3"===3);
a=6;
b=3;
console.log(a!=b && b!=a);
console.log(a!=b || b!=a);

//if ladder
let marks=55;
if(marks>=90){
    console.log("grade A");
}else if(marks>=80){
    console.log("grade b");
}else if(marks>=70){
    console.log("grade c");
}else{
    console.log("grade d");
}

//ternanry operator 
a=5+6>10 ? console.log("greater than 10") : console.log("less than 10");
