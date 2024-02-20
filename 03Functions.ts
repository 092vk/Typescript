// type inference in case of variable is not important but it is in case of functions 

function addNum(num:number){
    return num+2;
}
let num = addNum(5);
console.log(num);


function toUpper(str:string){
    return str.toLocaleUpperCase();
}
console.log(toUpper("i am vievk kumar ray"));


function course(name:string,branch:string,pass:boolean=false){
    //pass has default value of false
    console.log(pass);
    return name+" "+branch;
}
console.log(course("vivek","ece",true));
console.log(course("kumar","cse"));


// arrow functions with default arguments 
let result =(name:string,branch:string,pass:boolean=false)=>{
    console.log(pass);
    return name+" "+branch;
}
let ans = result("shivam","ece",true);
console.log(ans);
ans = result("shubham","ece",false);
console.log(ans);






// **************************************
// how to return safe return value 

// 1. functions that return only one type of value *****you can define which type of data type your function will return ****

function incrementer(num:number):number{
    return ++num;
}
// console.log(incrementer("8")); ***wrong will give error
console.log(incrementer(6));



// 2.**functions that return multiple types of values**

function condition(loged:boolean){
    if(loged){
        return 1;
    }
    else{
        return "you are not loged";
    }
}
let con1 = condition(true);//its type is a or function between number and string 
let con2= condition(false);


console.log(con1);
console.log(con2);


// write a arrow function that return two types of data type 
const myFunc = (a:number)=>{
    if(a>0)return true;
    else return "false";
}
console.log(`the value of myFunc is ${myFunc(2)}`);
console.log(`the value of myFunc is ${myFunc(-1)}`);



// make a array and use the arrow map function on it 
const heroes = ["captain","spiderman","ironman"];
const heroesNumber = [1,2,3];
const heroesMap = heroes.map((hero)=>{
    return `hero is ${hero}`;
})
console.log(heroesMap);




// function that returns void 
function consoleError(errorMsg:string):void{
    console.log(errorMsg);
}
consoleError("you forgot s again");
// we should explicitly mention the return type of functions which are returning nothing as void , this is a good practice 



// functions that returns never 

function fail(msg:string):never{//mentioning that the function return never is a good practice 
    throw new Error(msg);
}//return never

//**the never type represents values which are never observed. in a return type , this means that the function throws an exception or terminates execution of the program */ 





export{};