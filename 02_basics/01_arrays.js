//ways to declear arrays in js
const myArry=[10,12,123,145]

console.log(myArry);

const myArry1=[10,12,123,145,"it can hold mixture of types"]

console.log(myArry1);

const myArr2 =new Array(1,2,3,4)
// myArr2.push(5)//push to add
// myArr2.pop()//pop removes last value of the array
// console.log(myArr2.includes(2));

const newArray =myArr2.join()// join() method convert the array into string

console.log(myArr2);
console.log(newArray);
console.log(typeof newArray);