"use strict";
// bad behaviour of objects in typescript 
Object.defineProperty(exports, "__esModule", { value: true });
// making a typical object , this is same as js 
var User = {
    name: "vivek ray",
    branch: "ece",
    roll: "22bec092"
};
// passing the objects inside the functions and returning the objects back
function student(_a) {
    var name = _a.name, branch = _a.branch, roll = _a.roll;
    console.log(name, branch, roll);
}
student(User);
// so when we give objects to a function in typeScript we have to tell the types of parameters(not mandotary) and the types of return value(isAppreciated)
function student1(_a) {
    var name = _a.name, branch = _a.branch, roll = _a.roll;
    console.log(name, branch, roll);
}
student1(User);
// ******function taking a object and returning a object ***************************
function student2(_a) {
    var name = _a.name, branch = _a.branch, roll = _a.roll;
    return { name: "vicek", branch: "ece", roll: "22bec092" };
}
var temp = student2(User);
console.log(temp);
// odd/bad behaviour of typeScript objects
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log("got the arguments");
    console.log(name);
    console.log(isPaid);
}
// createUser({name : "hitesh",isPaid : false,email:"vk0961103@gmail.com"}); //******ERROR AS EMAIL IS NOT DEFINED IN THE PARAMETERS  *****/
// now this will give a error , as we have a extra argument which we are trying to pass ,
var newUser = { name: "hitesh", isPaid: false, email: "vk0961103@gmail.com" };
createUser(newUser);
