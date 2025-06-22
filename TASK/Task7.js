
//Generator Function : 
// Syntax : 
/*
1) function *function_name(){

}

2)function* function_name(){

} 

3)function*function_name(){

}
*/
//function declration/initialization
// function *Generatorfu(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }
// var output = Generatorfu();
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());
// console.log(output.next());


/////////////////////////////////
// Create a generator that yields the characters of a given string one by one.

// var str = "Meet";
// function* stringGenerator(str){
//     for(var char of str){
//         yield char;
//     }
// }
// var generator = stringGenerator(str);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// Write a generator function to yield prime numbers up to a given limit.

// var limit = 20;
// function* primeGenerator(limit){
//     function isPrime(num){
//         if(num <= 1){
//             return false;
//         }
//         for(var i = 2; i * i <= num; i++){
//             if(num % i == 0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     for (var num = 2; num <= limit; num++){
//         if(isPrime(num)){
//             yield num;
//         }
//     }
// }
// var generator = primeGenerator(limit);
// for(var prime of generator){
//     console.log(prime);
// }
