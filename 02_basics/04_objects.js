//singleton object
const tinderUser = new Object()
tinderUser.name="hitesh"    //object m value add ese hoti hai 
tinderUser.age=25           
tinderUser.id=101           

//console.log(tinderUser);

//nested object , object k andar objects
const regularUser={

    email:"kldjfhcl@gmail.com",
    fullname:{
        userName:{
            firstName:"Rajesh",
            lastName:"Sharma"
        }
    }
}


//console.log(regularUser);
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userName);

const obj1={1:"orange",2:"apple"}
const obj2={3:"banana",4:"watermelon"}
//way to merge two objects
//const obj3=Object.assign({} ,obj1,obj2)

const obj3={...obj1,...obj2}//spread method to combine objects this is also an anoyher way to join two object
//console.log(obj3);

//ArrayObject

const users =[

    {
        id:1,
        name:"dagf"
    },
    {
        id:1,
        name:"dagf"
    },
    {
        id:1,
        name:"dagf"
    },
    {
        id:1,
        name:"dagf"
    }


]
console.log(users);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

