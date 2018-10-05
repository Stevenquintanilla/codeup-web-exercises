"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    var helloOutput = "Hello, " + name +"!";
    return helloOutput
}
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Steven");
    console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Steven";
    console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    var numberCheckIsTwo = parseFloat(number) === 2;
    return numberCheckIsTwo
}

console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tipPercent, billAmount) {
    var tipConversion = parseFloat(tipPercent) / 100;
    var tipAmount = parseFloat(billAmount) * tipConversion;
    return tipAmount.toFixed(2)
}

// console.log(calculateTip(25, 25.50));
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// var userBill = prompt("What is your bill?");
// var userTipPercent = prompt("What percentage would you like to tip?");
// var userTipAmount = calculateTip(userTipPercent, userBill);
//
// var showUserTipAmount = alert("Tip amount comes out to : $" + userTipAmount + "!");
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(itemPrice, discountPercentage) {
//     var discountTotal = parseFloat(itemPrice) * parseFloat(discountPercentage);
//     var discountAppliedItem = parseFloat(itemPrice) - discountTotal;
//
//     return discountAppliedItem
// }
//
// var userItemPrice = parseFloat(prompt("Enter the price of the item"));
// do {
//     var userItemDiscount = parseFloat(prompt("Enter the discount of the item (Between 0-.99)"));
//
// } while ((userItemDiscount) > 0.99 || (userItemDiscount) < 0);
// var userItemApplyDiscount = applyDiscount(userItemPrice, userItemDiscount);
// var showUserItemDiscount = alert("Total comes out to be $" + userItemApplyDiscount.toFixed(2));

function getRandomNumber(startNumber, maxNumber) {
    var random = Math.floor((Math.random() * (maxNumber - startNumber + 1)) + startNumber);
    return random
}

console.log(getRandomNumber(6, 8));

function firstCharacter(input) {
    var firstChar = input.substring(0, 1);
    return firstChar
}

console.log(firstCharacter("Test"));

function lastCharacter(input) {
    var lastChar = input.slice(-1);
    return lastChar
}

console.log(lastCharacter("Code Up"));

function afterFirstCharacter(input) {
        var afterFirstChar = input.slice(1, input.length);
        return afterFirstChar
}

console.log(afterFirstCharacter("Testing"));

function beforeLastCharacter(input) {
    var beforeLastChar = input.slice(-input.length, -1);
    return beforeLastChar
}

console.log(beforeLastCharacter("Testing"));

function reverse(input) {
    var splitString = input.split(""),
        reverseSplitString = splitString.reverse(),
        reverseJoinString = reverseSplitString.join("");
    return reverseJoinString
}

console.log(reverse("Howdy"));

function isNumeric(input) {
    if (isNaN(input) === true) {
        return false
    }
    else {
        return true
    }
}

function remainder(a, b) {
    var remainderCalculation = a % b;
    return remainderCalculation
}

function multiplication(a, b) {
    var multiply = a * b;
    return multiply
}

function divide(a, b) {
    var division = a % b;
    return division
}

function subtract(a, b) {
    var subtraction = a - b;
    return subtraction
}

function add(a, b) {
    var sum = a + b;
    return sum
}

function square(a) {
    var multiplyItself = a * a;
    return multiplyItself
}

console.log(isNumeric(19));

function sumOfSquares(a, b) {
    var firstNumberSquared = square(a);
    var secondNumberSquared = square(b);
    var addTwoSquaredNumbers = add(firstNumberSquared, secondNumberSquared);

    return addTwoSquaredNumbers
}

    console.log(sumOfSquares(4, 4));

// function doMath(operator, a, b) {
//     if (operator === "multiplication" || operator === "multiply") {
//         return multiplication(a , b)
//     } else if (operator === "subtract" || operator === "subtraction") {
//         return subtract(a, b)
//     } else if (operator === "division" || operator === "divide") {
//         return divide(a, b)
//     } else if (operator === "addition" || operator === "add") {
//         return add(a, b)
//     } else if (operator === "remainder") {
//         return remainder(a, b)
//     } else {
//         return alert("Did not recognize the operator name")
//     }
// }
// var operatorName = prompt("Enter an operator name");
// var userFirstNumber = parseFloat(prompt("Enter the first number"));
// var userSecondNumber = parseFloat(prompt("Enter the second number"));
// var calculations = doMath(operatorName, userFirstNumber, userSecondNumber);
//
// var showMathResults = alert("Results: " + calculations);

function isMultipleOfFive(input) {
    var isMultiFiveCheck = input % 5 === 0;
    return isMultiFiveCheck
}

function isTruthy(input) {
    var output = true; //I'm just initializing
    output = Boolean(input) === true;
    return output
}

function isFalsey(input) {
    var output = true;
    output = Boolean(input) === false;
    return output
}

function isVowel(letter) {
    var output = true;
    output = letter.toLowerCase() === "a" ||
            letter.toLowerCase() === "e" ||
            letter.toLowerCase() === "i" ||
            letter.toLowerCase() === "o" ||
            letter.toLowerCase() === "u";
    return output
}


function isCapital(letter) {
    var output = true;
    output = letter === letter.toUpperCase();
    return output
}

function isLowerCase(letter) {
    var output = true;
    output = letter === letter.toLowerCase();
    return output
}

function hasLowerCase(input) {
    var output = "";
    output = input.toUpperCase() !== input;
    return output

}

function hasUpperCase(input) {
    var output = "";
    output = input.toLowerCase() !== input;
    return output
}

function squareRoot(input) {
    var output = 0;
    output = Math.sqrt(input);
    return output
}

function cubeRoot(input) {
    var output = 0;
    output = Math.cbrt(input);
    return output
}

function invertSign(input) {
    var output = 0;
    output = input * -1;
    return output
}

function degreeToRadians(input) {
    var output = 0;
    output = input * (Math.PI / 180);
    return output
}

console.log(degreeToRadians(90));

function removeString(firstString, secondString) {
    if (firstString.includes(secondString) === true) {
        var secondStringRemoveFromFirst = firstString.replace(secondString, "");
        return secondStringRemoveFromFirst
    } else {
        return firstString;
    }
}

function ifLastCharIsA(string) {
    var stringLastChar = string.slice(-1);
    if (stringLastChar.toLowerCase() === "a") {
        var removeA = string.substring(0, string.length -1);
        return removeA
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

console.log(hasNumber("hello"));

function makeJustinMessage(input) {
    input = input.toLowerCase();
    if (input === "justin") {
        return "It's Justin!"
    } else if (input.indexOf(" ") !== -1  || hasNumber(input) === true) {
        return "input is not VALID"
    } else {
        return "It's not Justin"
    }
}

function actionStreetLight(input){
    input = input.toLowerCase();
    if (input === "red") {
        return "STOP"
    } else if (input === "yellow") {
        var userDecision = confirm("Do you have time to stop?");
        if (userDecision === true) {
            return "Make the stop"
        } else {
            return "SPEED THROUGH IT GOGOGOGO"
        }
    } else if (input === "green") {
        return "Drive through safely"
    }
}

function returnInput(input) {
    if (input === "") {
        return "no input provided"
    } else {
        return input
    }
}

var firstUnit = prompt("Give the first unit of measurement"),
    userValue = parseFloat(prompt("Give a value for the first unit")),
    secondUnit = prompt("Give the second unit of measurement to convert to");

function metricConversion(firstUnit, secondUnit, userValue) {
    switch (firstUnit) {
        case "kilo" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue;
                    break;
                case "hecto" :
                    return userValue * 10;
                    break;
                case "deka" :
                    return userValue * 100;
                    break;
                case "deci" :
                    return userValue * 1000;
                    break;
                case "centi" :
                    return userValue * 10000;
                    break;
                case "milli" :
                    return userValue * 100000;
                    break;
            }
        case "hecto" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue / 10;
                    break;
                case "hecto" :
                    return userValue;
                    break;
                case "deka" :
                    return userValue * 10;
                    break;
                case "deci" :
                    return userValue * 100;
                    break;
                case "centi" :
                    return userValue * 1000;
                    break;
                case "milli" :
                    return userValue * 10000;
                    break;
            }
        case "deka" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue / 100;
                    break;
                case "hecto" :
                    return userValue / 10;
                    break;
                case "deka" :
                    return userValue;
                    break;
                case "deci" :
                    return userValue * 10;
                    break;
                case "centi" :
                    return userValue * 100;
                    break;
                case "milli" :
                    return userValue * 1000;
                    break;
            }
        case "deci" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue / 1000;
                    break;
                case "hecto" :
                    return userValue / 100;
                    break;
                case "deka" :
                    return userValue / 10;
                    break;
                case "deci" :
                    return userValue;
                    break;
                case "centi" :
                    return userValue * 10;
                    break;
                case "milli" :
                    return userValue * 100;
                    break;
            }
        case "centi" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue / 10000;
                    break;
                case "hecto" :
                    return userValue / 1000;
                    break;
                case "deka" :
                    return userValue / 100;
                    break;
                case "deci" :
                    return userValue / 10;
                    break;
                case "centi" :
                    return userValue;
                    break;
                case "milli" :
                    return userValue * 10;
                    break;
            }
        case "milli" :
            switch (secondUnit) {
                case "kilo" :
                    return userValue / 100000;
                    break;
                case "hecto" :
                    return userValue / 10000;
                    break;
                case "deka" :
                    return userValue / 1000;
                    break;
                case "deci" :
                    return userValue / 100;
                    break;
                case "centi" :
                    return userValue / 10;
                    break;
                case "milli" :
                    return userValue;
                    break;
            }

    }
}

console.log(metricConversion(firstUnit, secondUnit, userValue ));