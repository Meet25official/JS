// 35. Write a program in C to display the first n terms of the Fibonacci series.
// Fibonacci series 0 1 2 3 5 8 13 .....

var n = 10;
function fibonacci(n) {
    var a = 0, b = 1;
    console.log("Fibonacci Series:");
    console.log(a); 
    console.log(b); 

    for (var i = 2; i < n; i++) {
        var c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci(n);
