// - recurssion Function 
// var i = 1;
// function Hello(){
//     console.log(i++);
// }
// Hello();
// var fact = 1;
// var n = 5;
// for (var i = 1; i <=n; i++) {
//     fact=fact*i;
// }
// console.log(fact);

// var fact = 1;
// function Factorial(n){
//     if(n==0)
//         {
//             return fact;
//         }
//         fact= fact*n;
//     return Factorial(n-1);
// }
// console.log("Factorial : ",Factorial(5));

// --------------------------------------
// Fibonacci Sequence
// Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.

// var fib = [0, 1];
// function fibonacci(n){
//     if(n <= 1){
//         return fib[n];
//     }
//     for (var i = 2; i <= n; i++) {
//         fib.push(fib[i-1] + fib[i-2]);
//     }
//     return fib[n];
// }
// console.log(fibonacci(10));

// ------------------------------
// String Reversal
// Write a function reverseString(str) that returns the reversed version of a given string.

// function reverseString(str){
//     return str.split("").reverse().join("");    
// }
// console.log(reverseString("Meet Sarvaiya"));

// ---------------------------------
// Binary Search
// Write a function binarySearch(arr, target) that implements the binary search algorithm using recursion to find the index of target in a sorted array arr.

// function binarySearch(arr, target){
//     return binarySearchHelper(arr, target, 0, arr.length - 1);
// }
// function binarySearchHelper(arr, target, left, right){
//     if(left > right){
//         return -1;
//     }
//     var mid = Math.floor((left + right) / 2);
//     if(arr[mid] === target){
//         return mid;
//     }
//     else if(arr[mid] < target){
//         return binarySearchHelper(arr, target, mid + 1, right);
//     }
//     else{
//         return binarySearchHelper(arr, target, left, mid - 1);
//     }
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearch(arr, 5));
// ----------------------------------
// N-Queens Problem
// Write a function solveNQueens(n) that solves the N-Queens problem and returns one possible solution.

// function solveNQueens(n){
//     var board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
//     var result = [];
//     function placeQueen(row){
//         if(row === n){
//             result.push(board.map(row => row.join('')));
//             return;
//         }
//         for(var col = 0; col < n; col++){
//             if(isSafe(row, col)){
//                 board[row][col] = 'Q';
//                 placeQueen(row + 1);
//                 board[row][col] = '.';
//             }
//         }
//     }
//     function isSafe(row, col){
//     for(var i = 0; i < row; i++){
//         if(board[i][col] === 'Q' || (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') || (col + (row - i) < n && board[i][col + (row - i)] === 'Q')){
//             return false;
//         }
//     }
//     return true;
// }
//     placeQueen(0);
//     return result;
// }
// console.log(solveNQueens(4));
    

// -------------------------------------
// Tower of Hanoi
// Write a function towerOfHanoi(n, fromRod, toRod, auxRod) that solves the Tower of Hanoi problem for n disks.
// function towerOfHanoi(n, fromRod, toRod, auxRod){
//     if(n === 1){
//         console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
//         return;
//     }
//     towerOfHanoi(n - 1, fromRod, auxRod, toRod);
//     console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
//     towerOfHanoi(n - 1, auxRod, toRod, fromRod);
// }
// towerOfHanoi(3, 'A', 'C', 'B');
    
// ------------------------------------
// Merge Sort
// Write a function mergeSort(arr) that sorts an array using the merge sort algorithm.
// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     var mid = Math.floor(arr.length / 2);
//     var left = arr.slice(0, mid);
//     var right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
// }
// function merge(left, right){
//     var result = [];
//     var i = 0, j = 0;
//     while(i < left.length && j < right.length){
//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
//     while(i < left.length){
//         result.push(left[i]);
//         i++;
//     }
//     while(j < right.length){
//         result.push(right[j]);
//         j++;
//     }
//     return result;
// }
// console.log(mergeSort([5, 2, 8, 1, 3]));
    
// --------------------------------------
// Quick Sort
// Write a function quickSort(arr) that sorts an array using the quick sort algorithm.
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     var pivot = arr[0];
//     var left = [];
//     var right = [];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right));
// }
// console.log(quickSort([5, 2, 8, 1, 3]));
// -------------------------------------