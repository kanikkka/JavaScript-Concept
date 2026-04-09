console.log("today we learn for each loop")
let a=[1,2,3,4,5,6,]
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

// for of loop
let obj={
    a:"kanika",
    b:19,
    c:"chal na"
}
for(const key in obj){
    if(obj.hasOwnProperty.call(obj,key)){
        const element=obj[key];
        console.log(element,key)
    }
}

