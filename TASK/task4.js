// - What is Function : 
// - A JavaScript function is a block of code designed to perform a particular task.
// - A JavaScript function is executed when "something" invokes it (calls it).


//Types of Function : 
// - Name Function 
    // - without arg and without rtn type 
    // - with arg and without rtn type 
    // - without arg and with rtn type 
    // - with arg and with rtn type 

// - Expression Function
    // - without arg and without rtn type 
    // - with arg and without rtn type 
    // - without arg and with rtn type 
    // - with arg and with rtn type 

// - Arrow Function
    // - without arg and without rtn type 
    // - with arg and without rtn type 
    // - without arg and with rtn type 
    // - with arg and with rtn type 

// - Anonymous Function
// - IIFE Function
// - Generator Function 
// - callback Function
// - recurssion Function 
// - Higher Order Function 
// - geter-seter Function  (oo)
//////////////////////////////////////////////////////
/Name Function/
/*
//Function declaration and Initialization
function Function_Name(){
    code;
}
//Function Calling
Function_Name();  
*/
//1) without arg and without rtn type 
//Function declaration and Initialization
// function Hello(){
//     console.log("Hello Everyone!!, Welcome to JS World!!😍");
// }

// Hello();//Function calling(invoke)

//2) with arg and without rtn type 
// function Addition(n1,n2){  //perameter : n1,n2
//     console.log("Addition is : ",n1+n2);
//     // console.log(typeof n1);
//     // console.log(typeof n2);
// }

// Addition(12,13);//Argument : 12,13

//3) without arg and with rtn type 
// function GiveMe_Somthing(){
//     return "Hello Everyone!!, Welcome to JS World!!😍";   // return
// }
// var ans = GiveMe_Somthing();
// console.log(ans);

//4) with arg and with rtn type.
// function Result(n1){
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
// console.log(output);



// //////////////////////////////////////////////////
// 1)  wap to check given input is Pelindrome or not. (using with arg and without rtn type) (string/num)

// function isPalindrome(str) {
//     var rev = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     if (rev == str) {
//         console.log("It is a Pelindrome num.");
//     } else {
//         console.log("It is not a Pelindrome num.");
//     }
// }
 
// var str1 = "nitin";
// var str2 = "Rama";
// var str3 = "1234";
// var str4 = "12321";
 
// isPalindrome(str1);
// isPalindrome(str2);
// isPalindrome(str3);
// isPalindrome(str4);

// 2) wap to check given num is Perfect or Not. (using with arg and with rtn type) 

var num;
function isPerfectnum(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }
    if (sum == num) {
      return "It is a perfect num.";
    } else {
      return "It is not a perfect num.";
    }
  }

  var out= isPerfectnum(28); 
  console.log(out);
  var out= isPerfectnum(25); 
  console.log(out);



  