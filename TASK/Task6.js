
// // // - Expression Function

// // //1) without arg and without rtn type 
// //Function declaration and Initialization
// var Hello =  function (){
//     console.log("Hello Everyone!!, Welcome to JS World!!😍");
// }

// // Hello();//Function calling(invoke)

// // //2) with arg and without rtn type 
// var Addition = function (n1,n2){  //perameter : n1,n2
//     console.log("Addition is : ",n1+n2);
//     // console.log(typeof n1);
//     // console.log(typeof n2);
// }

// // Addition(12,13);//Argument : 12,13

// // //3) without arg and with rtn type 
// var Z = function (){
//     return "Hello Everyone!!, Welcome to JS World!!😍";   // return
// }
// var ans = Z();
// // console.log(ans);

// // //4) with arg and with rtn type.
// var Result = function (n1){
//     if(n1>33)
//     {
//         return "You are Pass🤩.Give me Party😋.";
//     }
//     else
//     {
//         return "You are Fail😥.Batter Luck next Time😃.";
//     }
// }
// // var output = Result(20);
// // console.log(output);

// // console.log(Result(50));
// /////////////////////////////////////////////////////////////

// // Arrow Function : 
// // //1) without arg and without rtn type 
// //Function declaration and Initialization
// var Hello = ()=>{
//     console.log("Hello Everyone!!, Welcome to JS World!!😍");
// }

// // Hello();//Function calling(invoke)

// // //2) with arg and without rtn type 
// var Addition =(n1,n2)=>console.log("Addition is : ",n1+n2);
// // var Addition =n1=>{ 
// //     console.log("Addition is : ",n1);
// // }

// // Addition(12,13);//Argument : 12,13

// // //3) without arg and with rtn type 
// var Z = n1=>{
//     return "Hello Everyone!!, Welcome to JS World!!😍";   // return
// }
// var ans = Z();
// // console.log(ans);

// // //4) with arg and with rtn type.
// var Result = n1=>{
//     if(n1>33)
//     {
//         return "You are Pass🤩.Give me Party😋.";
//     }
//     else
//     {
//         return "You are Fail😥.Batter Luck next Time😃.";
//     }
// }
// var output = Result(20);
// // console.log(output);
// ///////////////////////////////////////////////////////////////////
// IIFE Function : (immidiatly Invoked Function Expression)

// without argument 
// (function (){
//     console.log("Hello");
// })()

//with argument
// (
//     function (n1,n2){
//         console.log(n1+n2);
//     }
// )(12,13);

// (
//     ()=>{
//         console.log(12);
//     }
// )();
// (n1=>console.log(n1))(12)


// (
//     function (){

//     }
// )()()

//////////////////////////////////////////////////

// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


// var checkPalindrome = function(str){
//     var len = str.length;
//     for ( var i = 0; i < len/2; i++ ){
//         if ( str[i] != str[len - 1 - i] ){
//                 return "string is not a palindrome";
//         }
//     }
//     return "string is a palindrome";
// }
// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("nursesrun"));




// Function Arrow
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 


// var str = "dog";
// var result = [];
// var f = (str) => {
//     for (var i = 0; i < str.length; i++) {
//         for (var j = i + 1; j <= str.length; j++) {
//             result.push(str.slice(i, j));
//         }
//     }
//     return result;
// }
// console.log(f(str));
/////////////////////////////////////
// var str = "dog";
// var f = (str) => {
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         for (var j = i + 1; j <= str.length; j++) {
//             result += str.substring(i, j);
//             if (j <= str.length) result += ", ";
//         }
//     }
//     return result;
// };
// console.log(f(str));

// IIFE 
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

//////////////////////////////////

var inputString = 'webmaster';
var alphabetizeString = (function() {
    return function(str) {
        var strArray = str.split(""); 
        for (var i = 0; i < strArray.length; i++) {
            for (var j = i + 1; j < strArray.length; j++) {
                if (strArray[i] > strArray[j]) {
                    var temp = strArray[i];
                    strArray[i] = strArray[j];
                    strArray[j] = temp;
                }
            }
        }
        var sortedStr = strArray.join(""); 
        return sortedStr;
    };
})();
console.log(alphabetizeString(inputString));

/////////////////
var alphabetizeString = (function() {
    return function(str) {
        var strArray = str.split(""); 
        var sortedStr = strArray.sort().join(""); 
        return sortedStr;
    };
})();
var inputString = 'webmaster';
console.log(alphabetizeString(inputString));




