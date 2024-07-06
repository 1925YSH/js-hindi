//Immediately Invoke Function Expression

(function chai (){
    console.log("IIFE");
    console.log("ese IIFE likhte hai DO ()() m bad vala execute krne k liye use hota hai");
})();

((name)=>{
    console.log(`${name}`);
})("HItesh")