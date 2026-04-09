console.log("today we learn array in this sigma batch")
const fruits=["apple","banana","grapes","mango"]
console.log(fruits)
const a=[1,2,3,4,5,6,7]
console.log(a)
console.log(a[3])
a[0]=24 //string are inmutable but array are mutuable(can be changed)
console.log(a,typeof a)
//various method of string
// 1.tostring method
let ab=[5,3,2,6,8]
console.log(ab.toString(),typeof ab.toString)
// join method
console.log(ab.join("kanikaji"),typeof ab.join)
//pop method  last wale element ko remove krega
console.log(ab.pop(),ab)
//push method 
console.log(ab.push(6),ab)
console.log(ab.push("kanika"))
//shift method  first element ko remove krega
console.log(ab.shift(),ab)
//unshift method
console.log(ab.unshift(0),ab)
//delete method
delete ab[2]
console.log(ab)
console.log(ab.length)
// sort method
ab.sort()
console.log(ab)
// splice method
ab.splice(1,4)
ab.splice(1,3,"1 gaya","2 gaya")
console.log(ab)
// slice method
let c=ab.slice(1,3)
console.log(c,ab)
//reverse method
ab.reverse()
console.log(ab)


