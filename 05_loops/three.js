const arr =[1,2,3,4,5,6]

for (const i of arr) {
    //console.log(`value of i is ${i}`);
   // console.log(i);
}

let greeting ="HELLO WORLD"
for (const arr of greeting) {
   // console.log(arr);
}
//Maps

const map =new Map()
map.set('In' ,"India")
map.set('USA' ,"United State Of America")
map.set('FR' ,"Franc")
map.set('UK' ,"United Kingdom")

//console.log(map);

for (const [i,value] of map) {
    console.log(i,':-',value);
}