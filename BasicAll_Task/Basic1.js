/13-06/ 
// ### `let`
// 1. Declare a variable using `let`, assign it a value, then change the value.
// let n1;
// n1 = 12;
// console.log(n1);
// n1 = 13;
// console.log(n1);

// 5. Use a `let` variable to hold a counter in a while loop and print the counter value after the loop.
// let counter = 0;
// var i = 1;
// while(i<5) 
// {
//     counter = i;
//     i++;
// }
// console.log(counter);  


// ### `const`

// 2. Declare an array or object with `const` and modify its contents.
// const Arr = [1,2,3,4,5,6];

// Arr[0] = 100;
// console.log(Arr);
// 3. Create a `const` object with nested properties and modify one of the nested properties.
// const obj = {
//     fname : "Raj",
//     Address : {
//         city : "GNR",
//         nation : "India"
//     }
// }
// obj.Address.city = "AMD";
// obj["Address"].city = "AMD";
// obj.Address['city'] = "AMD";
// obj['Address']['city'] = "AMD";

// console.log(obj.Address.city);

// 4. Declare a `const` variable inside a function and try reassigning it inside the function.
// function All(){
//     const n1 = 12;
//     // n1++;
// }
// All();
// 5. Use `const` to declare a configuration object and access its properties in different functions.


// function All(){
//     const obj = {
//         fname : "Raj",
//         Address : {
//             city : "GNR",
//             nation : "India"
//         }
//     }

//     console.log(obj.fname);
// }
// All();

// ### String Indexing
// // 1. Create a string and access each character using its index.
// var str = "Royal";
// for (const key in str) {
//     console.log(key,str[key]);
// }
// 2. Write a function that returns the first and last character of a string.

// function All(str){
//     return str[0]+str[str.length-1];
// }
// console.log(All("Royal"));

// 3. Access the middle character of a string.
// function All(str){
//     return str[Math.floor((str.length-1)/2)];
// }
// console.log(All("Royal"));

// 4. Write a function that takes a string and an index and returns the character at that index.
// function All(str,i){
//     return str[i];
// }
// console.log(All("Royal",10));
// 5. Iterate through a string and print each character on a new line.
// for (const iterator of "Royal") {
//     console.log(iterator);
// }

// /////////////////////////////////

// ### `let`
// 1. Declare a `let` variable and initialize it with your age. Print the variable.
// let age = 21;
// console.log(age);

// 2. Declare a `let` variable and initialize it with the current year. Print it and then update it to next year.
// let year = 2024;
// console.log(year);

// 3. Use a `let` variable inside a `for` loop to count from 1 to 5.
// for (let i = 0; i < 5; i++) {
//     const element = array[i];
    
// }
// 4. Declare a `let` variable inside an `if` block and try to access it outside the block.
// if (true) {
//     let myVariable = "Inside the block";
//     console.log(myVariable);
// }

// 5. Use `let` to declare a variable that holds an array and modify the array.
// let myArray = [1, 2, 3, 4];
// console.log(myArray);
// myArray.push(5);
// console.log(myArray);

// ### `const`
// 1. Declare a `const` variable and initialize it with a string. Print the variable.
// const myString = "Hello, world!";
// console.log(myString);

// 2. Create a `const` array and add new elements to it.
// const myArray = [1, 2, 3];
// myArray.push(4);
// console.log(myArray);

// 3. Declare a `const` object and change one of its properties.
// const myObject = {
//     name: "Meet",
//     age: 21
// };
// myObject.age = 22;
// console.log(myObject);

// 4. Use `const` to declare a variable that holds the result of a mathematical operation.
// const result = 10 * 5;
// console.log(result);

// 5. Declare a `const` variable in a function and print it.
// function myFunction() {
//     const localVar = "I'm a const variable inside a function.";
//     console.log(localVar);
// }
// myFunction();

// ### String Indexing
// 1. Write a function that returns the second character of a string.
// function secondCharacter(str) {
//     return str.charAt(1);
// }
// console.log(secondCharacter("Hello"));

// 2. Access and print the last character of a string using its index.
// const myString = "Hello";
// console.log(myString[myString.length - 1]);

// 3. Create a string and use a loop to print each character on a new line.
// const myString2 = "Hello";
// for (let i = 0; i < myString2.length; i++) {
//     console.log(myString2[i]);
// }

// 4. Write a function that takes a string and an index and returns the character at that index, handling out-of-bounds indices.
// function Ind(str, index) {
//     if (index >= 0 && index < str.length) {
//         return str[index];
//     } else {
//         return "Index out of bounds";
//     }
// }
// console.log(Ind("Hello", 2));

// 5. Write a function that reverses a string using indexing.
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("Hello"));