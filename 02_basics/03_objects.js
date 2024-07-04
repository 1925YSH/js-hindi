//singleton - constructor object
//object.create

//literals way of declearing object
const user={
    name:"Hitesh",
    age:21,
    location:"jaipur",
    email:"dkhk@gmail.com",
    latLogin:["monday","wednesday"]
}

//these are the ways to acces the object
//1. console.log(user.email);
//2. console.log(user["location"]); 

user.email="hitesh@gmail.com" //ese hum values ko change krr skte hai
console.log(user.email);

//Object.freeze(user)//ese object ko lock krr skte hai jisse usski values ko change nhi krr paaenge
user.email="hitesh111@gmail.com"

//console.log(user);

//greeting variable m function add krr rhe hai object k andar
user.greeting=function(params) {
    console.log("HELLO JS USER");
    
}
user.greeting2=function(params) {
    console.log(`HELLO JS USER , ${this.name}`);
    
}//function m object ko refer krr rha hai `` ye backticks lgana jaruri hai
console.log(user.greeting());
console.log(user.greeting2());