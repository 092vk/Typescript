// bad behaviour of objects in typescript 


// making a typical object , this is same as js 
const User = {
    name :"vivek ray",
    branch:"ece",
    roll:"22bec092"
}

// passing the objects inside the functions and returning the objects back

function student({name,branch,roll}:{name:string,branch:string,roll:string}):void{
    console.log(name,branch,roll);
}

student(User);
// so when we give objects to a function in typeScript we have to tell the types of parameters(not mandotary) and the types of return value(isAppreciated)


function student1({name,branch,roll}):void{
    console.log(name,branch,roll);
}

student1(User);


// ******function taking a object and returning a object ***************************
function student2({name,branch,roll}):{name:String,branch:String,roll:string}{
    return {name:"vicek",branch:"ece",roll:"22bec092"};
}

const temp = student2(User);
console.log(temp);




// odd/bad behaviour of typeScript objects
function createUser({name,isPaid}){
    console.log("got the arguments");
    console.log(name);
    console.log(isPaid);
}

// createUser({name : "hitesh",isPaid : false,email:"vk0961103@gmail.com"}); //******ERROR AS EMAIL IS NOT DEFINED IN THE PARAMETERS  *****/

// now this will give a error , as we have a extra argument which we are trying to pass ,


let newUser = {name : "hitesh",isPaid : false , email:"vk0961103@gmail.com"};

createUser(newUser);
// BUT HERE WE ARE AGAIN PASSING ONE EXTRA ARGUMENT BUT THIS TIME WE ARE NOT GETTING ANY ERROR , THIS IS DUE TO THE BAD BEHAVIOUR OF TYPRSCRIPT , IT ACCEPTS MORE ARGUMENTS WHEN IT IS ABSTRACTED INTO AN OBJECT . IT DOES NOT GIVE ANY KNID OF ERROR AND WORKS PERFECTLY FINE 








export{}