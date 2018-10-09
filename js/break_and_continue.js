
function isNumeric(input) {
    return !isNaN(parseFloat(input));
}
 while (true) {
     var userInput = parseFloat(prompt("Give an odd number between 1-50 to skip"));
     if (isNumeric(userInput) !== true || userInput < 1 || userInput > 50 ||
     userInput % 2 === 0) {
         continue;
     } else {
         break;
     }
 }

for (var i = 1; i <= 50; i += 2) {
    if (i === userInput) {
        continue;
    }
    console.log("Here is an odd number :" + i);
}