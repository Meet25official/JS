/* Task : 1 
    - print your Bio Data using document.write
*/

document.write("<h1>Bio Data</h1>");
document.write("<p>Name: Meet Sarvaiya</p>");
document.write("<p>Age: 21</p>");
document.write("<p>Location: Sargasan, Gandhinagar</p>")

/* Task : 2 
    - print information about your fvrt clbry  any 5 lines using console
*/

console.log("Bill Gates, is a programmer so successful he is in a class of his own.")
console.log("The richest man on the planet is the founder of Microsoft.")
console.log("Computer engineer and American entrepreneur, he was a pioneer in the micro-computer industry.")
console.log("In 1975, when he was only 20 years old, he and his friend Paul Allen founded the micro-computer software company Microsoft.")
console.log("This is the company behind the Windows operating system which now practically holds a world-wide monopoly.")    

/* Task : 3 
- use all command of console tool.
*/

// Clearing the console
console.clear();

// Regular log message
console.log("This is a regular log message.");

// Warning message
console.warn("This is a warning message.");

// Error message
console.error("This is an error message.");

// Informational message
console.info("This is an informational message.");

// Grouping messages
console.group("Group");
console.log("Message inside group");
console.log("Another message inside group");
console.groupEnd();

// Logging an object as a table
console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);

// Testing assertion
console.assert(5 > 2, "Assertion passed: 5 is greater than 2.");
console.assert(2 > 5, "Assertion failed: 2 is not greater than 5.");

// Timing an operation
console.time("Timer");
for (let i = 0; i < 1000000; i++) {
    // Some heavy task
}
console.timeEnd("Timer");

