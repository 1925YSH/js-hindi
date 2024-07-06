//when a user logins data comes in object
const user = {
    username:"Hitesh",
    addharno :152354,

    welcomeUser :function () {
        console.log(`${this.username} , welcome to the website`);
        //console.log(this);
    }

}
//console.log(user);
//console.log(user.welcomeUser());

// user.welcomeUser()
// user.username="sam"
// user.welcomeUser()
//console.log(this)

//Arrow function

const chai = () => {
    console.log("arrow function");
    }
//chai()

// const addTwoNum=(num1,num2)=>{
//     return num1+num2
// }

//const addTwoNum=(num1,num2)=> num1+num2//ese bhi likh skte hai isko implicit return bolte hai

const addTwoNum=(num1,num2)=> (num1+num2)//agar () ese vale bracket lgae toh return nhi lgega or agar {} ese brackets aae toh return likhna pdega ye concept reactjs m jyada use hota hia 

console.log(addTwoNum(9,6));
