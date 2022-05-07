
/* Variables in Javascript
   Variables in javascript are created with the help of 3 keywords - var, let, const

   Rules for creating JavaScript Varibales
     1. Cannot start with numbers
     2. Can start with letter, underscore(_), dollorSign($)
*/

/* var keyword
   1. var has global scope
   2. can be declared and initialized later
*/

var userName = "Rishabh";  //declaration + initialization
var age;   //declaration
age = 23;  //initialization
console.log(userName,age);

/* const Keyword
    1. variables created with const keyword cannot be modified later
    2. their initialization has to be done at time of declaration
*/

const laptopModel = "Lenevo";
const processorName = "AMD Ryzen 7";
console.log(laptopModel,processorName);

/* let Keyword
    1. let keyword has block local scope
    2. let keyword goes out of scope once block ends
*/

{
    let userName = "Lucky";
    console.log(userName); //this will print Lucky
}

console.log(userName);  //this will print Rishabh
