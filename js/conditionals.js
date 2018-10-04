"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
 function askUserForNumber() {
    var userWouldNumber = confirm("Would you like to enter a number?");
    if (userWouldNumber === true) {
        var userChosenNumber = parseFloat(prompt("Enter a number"));
        var chosenNumberAddHundred = userChosenNumber + 100;
        if (userChosenNumber % 2 === 0) {
            alert("Number is even");
        } else {
            alert("Number is odd");
        }
        alert(userChosenNumber + " plus 100 is: " + chosenNumberAddHundred);
        if (userChosenNumber > 0) {
            alert("Number is Positive");
        } else if (userChosenNumber === 0) {
            alert("Number is 0");
        } else {
            alert("Number is negative");
        }
    }
    else {
        alert("You chose to not enter a number");
    }
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === "red") {
        return console.log("Red is the color or roses");
    } else if (color === "orange") {
        return console.log ("orange is the color of oranges");
    } else if (color === "yellow") {
        return console.log("yellow is the color of lemons");
    } else if (color === "green") {
        return console.log("green is the color of grass");
    } else if (color === "blue") {
        return console.log("blue is the color of the ocean");
    } else if (color === "indigo") {
        return console.log("indigo looks similar to purple");
    } else if (color === "violet") {
        return console.log("Violet is like a lighter purple");
    } else {
        return console.log("I do not recognize that color");
    }
}

analyzeColor("red");
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var color = prompt("Enter a color");
// switch (color) {
//     case "red" :
//         alert("red is the color of roses");
//         break;
//     case "orange" :
//         alert("orange is the color of oranges");
//         break;
//     case "yellow" :
//         alert("yellow is the color of lemons");
//         break;
//     case "green" :
//         alert("green is the color of grass");
//         break;
//     case "blue" :
//         alert("blue is the color of the ocean");
//         break;
//     case "indigo" :
//         alert("indigo looks similar to purple");
//         break;
//     case "violet" :
//         alert("violet is lighter than purple");
//         break;
//     default :
//         alert("I do not recognize that color");
//
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userChosenColor = prompt("Type in a color");
//     console.log(analyzeColor(userChosenColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    var convertedAmount = parseFloat(totalAmount);
    switch (luckyNumber) {
        case 0 :
            return convertedAmount.toFixed(2);
            break;
        case 1 :
            var discountCalc= parseFloat(convertedAmount) * .10,
                discountedTotal = convertedAmount - discountCalc;
            return discountedTotal.toFixed(2);
            break;
        case 2 :
            var discountCalc= parseFloat(convertedAmount) * .25,
                discountedTotal = convertedAmount - discountCalc;
            return discountedTotal.toFixed(2);
            break;
        case 3 :
            var discountCalc= parseFloat(convertedAmount) * .35,
                discountedTotal = convertedAmount - discountCalc;
            return discountedTotal.toFixed(2);
            break;
        case 4 :
            var discountCalc= parseFloat(convertedAmount) * .50,
                discountedTotal = convertedAmount - discountCalc;
            return discountedTotal.toFixed(2);
            break;
        case 5 :
             return "It's free!";
            break;
        default :
             return "Do not recognize that lucky number";
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 1.00));