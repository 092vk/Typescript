// types in typescript 

let greetings : string ="Good Morning";
console.log(`hi vivek {greetings}`);

// the primitives : strings , numbers and boolean 

let mystr:string ="hello ts";
let mynum:number=23;
let mybool:boolean=true;

console.log(mystr , mynum , mybool);



// type Inference 
// so writing types again and again is not usefull , as tsc can detect the types on its own , 

let a =10;
let b =20;
let result = a+b;
console.log(typeof(result));

// a ="hink"; //tsc wont allow this 





// any keyword 
let hero;
function myhero(){
    return "thor";
}
hero = myhero();
// here hero has any as data type ,
// whenever we want to stop typeChecking we use any 
// but this is a bad practice and must not be used 







export {};


