// 1. Write a program that uses a switch statement to print the name of the day based on a number input (1 for Monday, 2 for Tuesday, etc.).
// var i = +prompt("1) for Monday\n2) for Tue ...\nEnter Your Choice : ");
// switch (i) {
//     case 1: console.log("Monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//     case 3: console.log("Wednesday");
//         break;
//     case 4: console.log("Thursday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("Saturday");
//         break;
//     case 7: console.log("Sunday");
//         break;
//     default: console.log("Enter Valid Choice !!");
//         break;
// }


// 2. Create a function that returns the corresponding month name based on a given month number (1 for January, 2 for February, etc.).
// var i = +prompt("1) for Jan\n2) for Feb ...\nEnter Your Choice : ");
// switch (i) {
//     case 1: console.log("Jan");
//         break;
//     case 2: console.log("Feb");
//         break;
//     case 3: console.log("March");
//         break;
//     case 4: console.log("April");
//         break;
//     case 5: console.log("May");
//         break;
//     case 6: console.log("June");
//         break;
//     case 7: console.log("July");
//         break;
//     case 8: console.log("Aug");
//         break;
//     case 9: console.log("Sep");
//         break;
//     case 10: console.log("Oct");
//         break;
//     case 11: console.log("Nav");
//         break;
//     case 12: console.log("Dec");
//         break;

//     default: console.log("Enter Valid Choice !!");
//         break;

// }

// 4. Write a function that takes a grade letter and prints the corresponding GPA using a switch statement.
// var key = +prompt("Enter Grade  :");
// switch (key) {
//     case "A": console.log("95-100");
//         break;
//     case "B": console.log("80-95");
//         break;
//     case 3 || 'c': console.log("65-80");
//         break;
//     case "D": console.log("33-65");
//         break;
//     case "F": console.log("0-33");
//         break;
//     default: console.log("Enter Valid Grade");
//         break;
// }
// 5. Use a switch statement to print the name of the season based on the month number.
// var key = 4;
// switch (key) {
//     case 1: case 2: case 11: case 12: console.log("🥶");
//         break;
//     case 3: case 4: case 5: case 6: document.write('<h1>🥵😵</h1>');
//             document.querySelector('h1').style.fontSize = "100px";
//         break;
//     case 7: case 8: case 9: case 10: console.log("🌧🌨🌩⛈🌦");
//         break;
//     default: console.log("Enter Valid Number");
//         break;
// }

// var a,b,c = (12,14,"Zafar");
// console.log(a,b,c);

// var v = 0 || undefined;
// console.log(v);



// 6. Create a function that returns the name of a fruit based on a number input (1 for apple, 2 for banana, etc.) using a switch statement.

// function getFruitName(number) {
//     switch(number) {
//         case 1:
//             return "Apple";
//         case 2:
//             return "Banana";
//         case 3:
//             return "Orange";
//         case 4:
//             return "Grape";
//         case 5:
//             return "Mango";
//         default:
//             return "Unknown fruit";
//     }
// }
// console.log(getFruitName(1));

// 7. Write a program that uses a switch statement to print a message based on the traffic light color (red, yellow, green).

// function trafficLightMessage(color) {
//     switch(color) {
//         case 'red':
//             console.log("Stop!");
//             break;
//         case 'yellow':
//             console.log("Prepare to stop.");
//             break;
//         case 'green':
//             console.log("Go!");
//             break;
//         default:
//             console.log("Invalid traffic light color.");
//     }
// }
// trafficLightMessage('red');

// 8. Use a switch statement to determine the type of a character (vowel, consonant, digit, special character).

// function characterType(char) {
//     var lowerChar = char.toLowerCase();
//     switch(lowerChar) {
//         case 'a': case 'e': case 'i': case 'o': case 'u':
//             return "Vowel";

//         case 'b': case 'c': case 'd': case 'f': case 'g': case 'h': case 'j': case 'k': case 'l': case 'm': case 'n': case 'p': case 'q': case 'r': case 's': case 't': case 'v': case 'w': case 'x': case 'y': case 'z':
//             return "Consonant";

//         case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
//             return "Digit";

//         default:
//             return "Special character";
//     }
// }
// console.log(characterType('a'));

// 9. Write a function that prints a message based on the day of the week using a switch statement.

// function dayMessage(day) {
//     switch(day) {
//         case 1:
//             console.log("Monday: Work mode ON!");
//             break;
//         case 2:
//             console.log("Tuesday: Keep grinding!");
//             break;
//         case 3:
//             console.log("Wednesday: Halfway there!");
//             break;
//         case 4:
//             console.log("Thursday: Almost Friday!");
//             break;
//         case 5:
//             console.log("Friday: Weekend is near!");
//             break;
//         case 6:
//             console.log("Saturday: Enjoy the weekend!");
//             break;
//         case 7:
//             console.log("Sunday: Relax and recharge.");
//             break;
//         default:
//             console.log("Invalid day number.");
//     }
// }
// dayMessage(1);

// 10. Use a switch statement to categorize an item based on its type (electronics, clothing, food, furniture).

// function categorizeItem(itemType) {
//     switch(itemType) {
//         case 'electronics':
//             console.log("This is an electronic item.");
//             break;
//         case 'clothing':
//             console.log("This is a piece of clothing.");
//             break;
//         case 'food':
//             console.log("This is a type of food.");
//             break;
//         case 'furniture':
//             console.log("This is a piece of furniture.");
//             break;
//         default:
//             console.log("Unknown item type.");
//     }
// }
// categorizeItem('food');