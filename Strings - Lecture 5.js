//Strings - Properties & Menthods

const name = "Rishabh";
const greeting = "Hello";
console.log(greeting + ' ' + name);


//concatenation
let html;
html = "<h1>" + "My Name is Rishabh" + "</h1>";
console.log(html);

//using concat function for concatenation
html = html.concat("this");
console.log(html); //this will be appended in last

//finding length of string
console.log(html.length);

//lowercase and uppercase

console.log(html.toLowerCase());
console.log(html.toUpperCase());

//indexing 
console.log(html[0],html[1]); //prints first and second character

//returns the first index from where h1 starts
console.log(html.indexOf("h1"));

//returns last index from where h1 starts
console.log(html.lastIndexOf("h1"));

//returns the character which is present at index 10
console.log(html.charAt(10));

//to check if a string ends with some particular char
console.log(html.endsWith("this")); //true

//to check if the given chars are present in string
console.log(html.includes("h1")); //true

//slicing
console.log(html.substring(1,10)); //extracts the substring from index 1 to 10-1
console.log(html.slice(0,15));

//spliting
console.log(html.split(" ")); //splits the char array where it finds space

//replace
console.log(html.replace("h1","h2")); //replaces the first occurence


let myHtml = "";
let fruit1 = 'Orange';
let fruit2 = "Banana";

myHtml = `Hello ${name} <h1> This is orange</h1>`;
document.body.innerHTML = myHtml;

