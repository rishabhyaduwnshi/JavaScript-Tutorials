/* 
    Type Conversion & Type Coercion
*/

//initilization of randomNumber variable
let randomNumber = 10;
console.log(typeof randomNumber);

//converting in string from number
let stringFromNumber = String(randomNumber);
console.log(stringFromNumber);
console.log(typeof stringFromNumber);

//converting in string from boolean
let booleanVariable = false;
let booleanString = String(booleanVariable);
console.log(booleanString, (typeof booleanString));

//converting from date to string
let date = String(new Date());
console.log(date, (typeof date));

//converting from array to string
let myStringArray = String([1,2,3,4,5]);
console.log(myStringArray, (typeof myStringArray));


//converting from string to number
let str = "1245";
console.log(Number(str), (typeof Number(str)));

//converting from boolean to number
let bool = true;
console.log(Number(bool), (typeof Number(bool))); //true will be typecasted as 1 and false as 0


//converting from string to float
let floatString = "23.125";
console.log(parseFloat(floatString), (typeof parseFloat(floatString)));


//Type Coercion

let mystr = "698";
let mynum = 34;

//this will print 69834 because mynum is converted is string 
//and then concatenation is performed
console.log(mystr + mynum);


