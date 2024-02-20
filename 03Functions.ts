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

// 1. functions that return only one type of value 
function incrementer(num:number):number{
    return ++num;
}
// console.log(incrementer("8")); ***wrong will give error
console.log(incrementer(6));



// 2.functions that return multiple types of values
function condition(loged:boolean){
    if(loged){
        return 1;
    }
    else{
        return "you are not loged";
    }
}
let con1 = condition(true);
let con2= condition(false);

console.log(con1);
console.log(con2);





export{};