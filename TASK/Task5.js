// 35. Write a program in C to display the first n terms of the Fibonacci series.
// Fibonacci series 0 1 2 3 5 8 13 .....

// var n = 10;
// function fibonacci(n) {
//     var a = 0, b = 1;
//     console.log("Fibonacci Series:");
//     console.log(a); 
//     console.log(b); 

//     for (var i = 2; i < n; i++) {
//         var c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }
// fibonacci(n);
/////////////////////////////////////////////

// Write a program in C to convert a decimal number into binary without using an array.
// Test Data :
// Input a decimal number: 25
// Binary number equivalent to said decimal number is: 0000000000000000000000000001 1001

var N = 25;
function decimalToBinary(n) {
    var binary = '';
    while (n > 0) {
        binary = (n % 2) + binary;
        n = (n - (n % 2)) / 2; 
    }
    return binary;
}
var binary = decimalToBinary(N);
console.log("The binary number is:- ");
console.log(binary);