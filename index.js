///1 
console.log(3 == "3");
console.log(3 === "3");
//Is there a difference? Why/why not? 
//yes :  num - string 

//* Which comparison operator should we generally use? Why?
//===
//* What would happen if we were to use `=`?
//because single equal its using for asign value 

//2 
const foo = true;
console.log((!foo) ? "love" : "red");

const boo = false;
console.log((!boo) ? "boom" : "wow");


//3
let firstName, givenName;
firstName = 'Stacey';
let naame = givenName || firstName || 'John'; 
console.log(naame);
//because  givenName have no value so it's continue to the second
// one and if has a value
// he will print it out if no he will continue to the next value.





