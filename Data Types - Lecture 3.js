/*  Data Types in JavaScript
        1. Primitive Data Type 
        2. Reference  Data Type

    Primitive Data Type
     1. Memory allocation done in stack
     2. Examples - string, numbers, boolean, null, undefined, symbol


    Reference Data Type
     1. Memory allocation done in heap
     2. Examples - Arrays, Object literals, functions, dates
*/

//Strings
let userName = "Rishabh";
console.log("My name is "+userName);
console.log("Data type of userName is " + (typeof userName));

//Numbers
let age = 10;
console.log("My age is "+age);
console.log("Data type of age is " + (typeof age));

//Boolean
let isProgrammer = true;
console.log("Data type of isProgrammer is " + (typeof isProgrammer));

//Null
let nullVariable = null;
//this will print data type of null as object but it is a primitive data type
console.log("Data type of nullVariable is " + (typeof nullVariable));

//undefined
let undefinedVariable = undefined;
console.log("Data type of undefinedVariable is " + (typeof undefinedVariable));


// Reference or Derived Data Type

//Arrays
let myarray = [1,2,3,"rishabh", true, undefined]; //array can contain multiple data types in javascript
console.log("Data type of myarray is "+(typeof myarray));

//object literals
let studentMarks = {'rishabh' : 40, 'ritesh' : 45, 'sudeep' : 50};
console.log(studentMarks);
console.log("Data type of studentMarks is "+(typeof studentMarks));

//function
function printName()
{
    console.log("Rishabh");
}
console.log("Data type of printName is "+(typeof printName));




