"use strict";
// types in typescript 
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Good Morning";
console.log("hi vivek {greetings}");
// the primitives : strings , numbers and boolean 
var mystr = "hello ts";
var mynum = 23;
var mybool = true;
console.log(mystr, mynum, mybool);
// type Inference 
// so writing types again and again is not usefull , as tsc can detect the types on its own , 
var a = 10;
var b = 20;
var result = a + b;
console.log(typeof (result));
