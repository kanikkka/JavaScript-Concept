console.log("hello its a variable lecture")
var a=5;
var b=10;
var $c="kanika";
console.log(a+b);
console.log($c);
console.log(typeof a,typeof b,typeof c);
//case sensitive
//chnages are not allowed in const
//concept of const
//const a1=5;
//a1=a1+1;
//console.log(a1);
//let concept
let a2=10;
a2=a2+1;
console.log(a2); //global variable
//primitive datat types are basic datatype 
//object are non primitive data types
let x="kanika"
let y=19;
let z=33.33;
const p=true;
const q=null; //object bcz stack overflow theory
let r=undefined;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

//object key value pair
let f={
    name:"kanika",
    age:19,
    job:"software engineer",
    salary:10000000
} //value can be function,array,object also;
console.log(f);
f.salary=20000000;
console.log(f);
f.name="kanika rajput";
console.log(f);