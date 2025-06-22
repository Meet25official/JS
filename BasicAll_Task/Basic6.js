// ### Nested If Else
// 1. Write a program that categorizes a person's age group (child, teenager, adult, senior) using nested if-else statements.
// var age = 51;
// if(age<=19){
//     if(age<=12){
//         console.log("Child");
//     }
//     else{
//         console.log("teenager");
//     }
// }
// else{
//     if(age>50)
//     {
//         console.log("senior");
//     }
//     else{
//         console.log("adult");
//     }
// }


// 2. Create a function that evaluates multiple conditions using nested if-else.


// 3. Write a function that checks a number and prints if it is positive, negative, or zero using nested if-else.
// function All(n){
//     if(n==0){
//         console.log("n is Zero");
//     }
//     else{
//         if(n>0){
//             console.log("positive");
//         }
//         else{
//             console.log("negative");
//         }
//     }
// }
// All(-0);


// 5. Write a function that takes a score and prints the corresponding letter grade using nested if-else.
// var s = +prompt("Enter your Score :");
// if(s<33){
//     console.log("F");
// }
// else{
//     if(s<50){
//         console.log("D");
//     }
//     else{
//         if(s<65)
//         {
//             console.log("C");
//         }
//         else
//         {
//             if(s<85){
//                 console.log("B");
//             }
//             else{
//                 console.log("A");
//             }
//         }
//     }
// }

// ### If Elseif Else
// 1. Rewrite the age group categorization using `if-elseif-else` statements.
// var age = 17;
// if(age<=12)
//     console.log("child");
// else if(age<=19)
//     console.log("teenager");
// else if(age<=50)
//     console.log("adult");
// else
//     console.log("senior");


// 2. Create a function that checks a student's grade and prints the corresponding letter grade (A, B, C, D, F).
// function All(n){
//     if(n>=95)
//         console.log("A");
//     else if(n>=75 && n<95)
//         console.log("B");
//     else if(n>=60 && n<75)
//         console.log("C");
//     else if(n>=35 && n<60)
//         console.log("D");
//     else
//         console.log("F");
// }
// All(79);

// 3. Write a function that takes a number and prints "Small", "Medium", or "Large" based on its value.
// var n = 12;
// if(n>1000)
//     console.log("Big");
// else if(n>100)
//     console.log("Medium");
// else
//     console.log("Small");
// 4. Use `if-elseif-else` to determine the season based on the month number.
// var s = prompt("Enter Month Name : ");
// if(s=='winter')
//     console.log("11,12,1,2");
// else if(s=='summer')
//     console.log("3,4,5,6");
// else if(s=='monsoon')
//     console.log("7,8,9,10");
// else
//     console.log("Enter Valid Month");




// 6. Use nested if-else to determine the type of a triangle (equilateral, isosceles, scalene) based on its sides.

// function triangleType(side1, side2, side3) {
//     if (side1 == side2 && side2 == side3) {
//         return "Equilateral triangle";
//     } else if (side1 == side2 || side1 == side3 || side2 == side3) {
//         return "Isosceles triangle";
//     } else {
//         return "Scalene triangle";
//     }
// }
// console.log(triangleType(5, 5, 5));

// 7. Write a function that categorizes an item based on its price range using nested if-else.

// function categorize(price) {
//     if (price < 50) {
//         return "Low-priced item";
//     } else if (price >= 50 && price < 100) {
//         return "Moderately-priced item";
//     } else {
//         return "High-priced item";
//     }
// }
// console.log(categorize(30));

// 8. Use nested if-else to check the state of an order (processing, shipped, delivered, canceled) based on its status code.

// function order(statusCode) {
//     if (statusCode == 1) {
//         return "Processing";
//     } else if (statusCode == 2) {
//         return "Shipped";
//     } else if (statusCode == 3) {
//         return "Delivered";
//     } else if (statusCode == 4) {
//         return "Canceled";
//     } else {
//         return "Invalid status code";
//     }
// }
// console.log(order(1));

// 9. Write a function that checks the weather condition and prints appropriate clothing advice using nested if-else.

// function weather(weather) {
//     if (weather == "sunny") {
//         return "Wear sunglasses and light clothes.";
//     } else if (weather == "rainy") {
//         return "Carry an umbrella and wear waterproof shoes.";
//     } else if (weather == "windy") {
//         return "Wear a windbreaker and secure any loose items.";
//     } else {
//         return "Check local weather updates for more information.";
//     }
// }
// console.log(weather("sunny"));

// 10. Use nested if-else to determine the appropriate shipping cost based on the weight of a package.

// function shipcost(weight) {
//     if (weight <= 0) {
//         return "Invalid weight";
//     } else if (weight <= 2) {
//         return "$5 shipping cost";
//     } else if (weight <= 5) {
//         return "$10 shipping cost";
//     } else {
//         return "$20 shipping cost";
//     }
// }
// console.log(shipcost(1.5));

// 6. Write a function that determines the type of vehicle (car, motorcycle, bicycle, truck) based on the number of wheels.

// function vehicle(wheels) {
//     if (wheels == 4) {
//         return "Car";
//     } else if (wheels == 2) {
//         return "Motorcycle";
//     } else if (wheels == 1) {
//         return "Bicycle";
//     } else if (wheels > 4) {
//         return "Truck";
//     } else {
//         return "Unknown vehicle type";
//     }
// }
// console.log(vehicle(4)); 

// 7. Use `if-elseif-else` to print a message based on the value of a variable (red, green, blue).

// function Message(color) {
//     if (color == "red") {
//         console.log("Stop! The light is red.");
//     } else if (color == "green") {
//         console.log("Go! The light is green.");
//     } else if (color == "blue") {
//         console.log("The color of the sky is blue.");
//     } else {
//         console.log("Unknown color.");
//     }
// }
// Message("red"); 

// 8. Write a function that checks a person's BMI and prints the corresponding category (underweight, normal, overweight, obese) using `if-elseif-else`.

// function BMI(height, weight) {
//     let bmi = weight / (height * height);
//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 25) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi < 30) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// console.log(BMI(1.75, 65));

// 9. Use `if-elseif-else` to check the grade of a student and print a message based on the grade.

// function Grade(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// console.log(Grade(95)); 

// 10. Write a function that takes a temperature and prints the corresponding weather condition (cold, warm, hot) using `if-elseif-else`.

// function weather(temperature) {
//     if (temperature < 10) {
//         return "Cold";
//     } else if (temperature >= 10 && temperature < 25) {
//         return "Warm";
//     } else {
//         return "Hot";
//     }
// }
// console.log(weather(5)); 