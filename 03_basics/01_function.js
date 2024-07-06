function firstFun() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");

}
// firstFun() this is the way  to execute function
// function addTWoNumber(number1,number2) {
//     console.log(number1 + number2);
// }
//addTWoNumber(4,4)

function addTWoNumber(number1,number2) {
    let result=number1+number2
    return result
}
const result=addTWoNumber(4,4)
//console.log( "Result : "  +result);
//console.log(addTWoNumber(4,4));

// function userLogin(userName) {
    
//     return `${userName}, just login`
// }
// console.log(userLogin("Hitesh"))

            //ye = to k baad default vlaue hai
function userLogin(userName ="sam") {
    
    return `${userName}, just login`
}
console.log(userLogin())//yaha value pass ni krrrte to defaulat value pass ho jaegi or de denge togh nhi hogi
console.log("------------------------------------------");
console.log("---------obj in fun---------");
// object in function
const user={
    username:"HItesh",
    age:21
}

function handleObject(anyThing) {
    console.log(`username is ${anyThing.username} and age is ${anyThing.age}`); 
    
}
handleObject(user)//function m object pass lrr diya

handleObject({
    username:"sam",
    age:21
})//ese direct object bhi nma skte hai

console.log("-------------------------------------------");
console.log("--------Arrays in fun-----------");

const myArray=[200,300,400]
function printSecondvalue(value) {
    return value //yaha prr value [index] isme specif value print krrvani ho toh usska index likhna hai
}
console.log(printSecondvalue(myArray));
