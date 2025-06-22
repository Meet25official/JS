// ### Truthy and Falsy Values
// 1. Write a function that returns `true` if a given value is truthy.
// function All(n){
//     if(Boolean(n))
//     {
//         return true;
//     }
// }
// console.log(All("sdfg"));

// 2. List all falsy values in JavaScript.
//  -> false ,0, "" , NaN,undefined ,null

// 4. Check the truthiness of an empty string and print the result.
// console.log(Boolean(""));

// 5. Write a function that takes a value and returns a default value if it is falsy.
// function All(n){
//     if(!Boolean(n))
//     {
//         return n;
//     }
// }
// console.log(All(null));

// 6. Check the truthiness of `0` and print the result.
// console.log(Boolean(0));

// 7. Use an `if` statement to print a message only if a variable is truthy.

// if(12)
//     console.log("variable is truthy");

// 8. Write a function that checks if an object is empty (has no properties).
// var count = 0;
// for (const key in {fname : "Raj"}) {
//         count++;
//     }
// if(count==0)
//     console.log("Object is Empty");

// 9. Check the truthiness of `NaN` and print the result.
//false

// 10. Use logical `||` to assign a default value to a variable if another variable is falsy.

// var n1 = 0;
// var n2 = 0;

// if(n1 || n2){
//     if(!n1)
//         n1 = true;
//     if(!n2)
//         n2 = true;
// }

// console.log(n1,n2);


// ### Truthy and Falsy Values

// 1. Write a function that takes a value and returns whether it is truthy or falsy.
// function All(n){
//         if(Boolean(n))
//         {
//             return true;
//         }
//     }
//     console.log(All("abcd"));

// 2. List out different values that are considered falsy in JavaScript.
// if(Boolean(null)){
//     console.log("true");
// }

// 3. Write a function that takes an array of values and returns an array of truthy values.
// function All(n){
//     if(Boolean(n))
//     {
//         return true;
//     }
// }
// console.log(All("abcd"));

// 4. Check the truthiness of an empty object and an empty array.
var count = 0;
for (const key in {fname : "Raj"}) {
        count++;
    }
if(count==0)
    console.log("Object is Empty");

// 5. Use a truthy value in an `if` statement to print a message.
// if(12)
//     console.log("variable is truthy");