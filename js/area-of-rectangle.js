"use strict";

var rectangleLength = prompt("What is the length of the rectangle?"),
    rectangleWidth = prompt("What is the width of the rectangle?"),
    userInputs = alert("You entered dimensions of " + rectangleLength + " by " + rectangleWidth);

var rectangleAreaFeet = parseFloat(rectangleWidth) * parseFloat(rectangleLength),
    convertFeetToSqMeter =
