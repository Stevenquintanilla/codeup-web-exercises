"use strict";

do {
    var firstNumber = prompt("Enter the first number:");
} while (firstNumber === ("") || isNaN(firstNumber) === true);

do {
    var secondNumber = prompt("Enter the second number:");
} while (secondNumber === ("") || isNaN(secondNumber) === true);

var mathAddition = parseFloat(firstNumber) + parseFloat(secondNumber),
    mathSubtraction = parseFloat(firstNumber) - parseFloat(secondNumber),
    mathMultipication = parseFloat(firstNumber) * parseFloat(secondNumber),
    mathDivision = parseFloat(firstNumber) / parseFloat(secondNumber);


var userShowMathResults = alert(firstNumber + " + " + secondNumber + " = " + mathAddition + "\n" +
                        firstNumber + " - " + secondNumber + " = " + mathSubtraction + "\n" +
                        firstNumber + " * " + secondNumber + " = " + mathMultipication + "\n" +
                        firstNumber + " / " + secondNumber + " = " + mathDivision   );


