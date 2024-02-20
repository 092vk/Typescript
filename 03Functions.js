"use strict";
// type inference in case of variable is not important but it is in case of functions 
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 2;
}
var num = addNum(5);
console.log(num);
function toUpper(str) {
    return str.toLocaleUpperCase();
}
console.log(toUpper("i am vievk kumar ray"));
function course(name, branch, pass) {
    if (pass === void 0) { pass = false; }
    //pass has default value of false
    console.log(pass);
    return name + " " + branch;
}
console.log(course("vivek", "ece", true));
console.log(course("kumar", "cse"));
// arrow functions with default arguments 
var result = function (name, branch, pass) {
    if (pass === void 0) { pass = false; }
    console.log(pass);
    return name + " " + branch;
};
var ans = result("shivam", "ece", true);
console.log(ans);
ans = result("shubham", "ece", false);
console.log(ans);
// **************************************
// how to return safe return value 
// 1. functions that return only one type of value *****you can define which type of data type your function will return ****
function incrementer(num) {
    return ++num;
}
// console.log(incrementer("8")); ***wrong will give error
console.log(incrementer(6));
// 2.**functions that return multiple types of values**
function condition(loged) {
    if (loged) {
        return 1;
    }
    else {
        return "you are not loged";
    }
}
var con1 = condition(true); //its type is a or function between number and string 
var con2 = condition(false);
console.log(con1);
console.log(con2);
// write a arrow function that return two types of data type 
var myFunc = function (a) {
    if (a > 0)
        return true;
    else
        return "false";
};
console.log("the value of myFunc is ".concat(myFunc(2)));
console.log("the value of myFunc is ".concat(myFunc(-1)));
