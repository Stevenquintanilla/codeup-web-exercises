function showMultiplicationTable(inputNumber) {
    for (i = 1; i <= 10; i += 1) {
        outputNumber = inputNumber * i;
         console.log(inputNumber + " x " + i + " = " +
             outputNumber);
    }

    return ;
}

function isEven(input) {
    if (input % 2 === 0) {
        return input + " is even";
    } else {
        return input + " is odd";
    }
}

function generateTenRandomNum() {
    for (i = 1; i <= 10; i += 1) {
        output = Math.floor(Math.random() * 200) + 20;
        console.log(isEven(output));
    }

    return ;
}


    // for (i = 1; i <= 10; i++) {
    // var pyramidBuilder = "";
    //     for(j = 1; j <= i; j++) {
    //         pyramidBuilder += i % 10;
    //     }
    //     console.log(pyramidBuilder);
    // }
    //

// for (i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }

function toggleCaps(input) {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower = 'abcdefghijklmnopqrstuvwxyz',
        result = [];

    for (var i = 0; i < input.length; i++) {
        if (upper.indexOf(input[i]) !== -1) {
            result.push(input[i].toLowerCase());
        } else if (lower.indexOf(input[i]) !== -1) {
            result.push(input[i].toUpperCase());
        } else {
            result.push(input[i]);
        }
    }
        console.log(result.join(''));
}

function otherToggleCaps(input) {
    input = input.split('');
    for(i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            return input[i].toLowerCase();
        } else if (input[i] === input[i].toLowerCase()) {
            return input[i].toUpperCase();
        } else {
            return input[i];
        }
    }
}

function countVowels(input) {
    var vowels = "aeiou",
        result = [];
    input = input.toLowerCase().split('');
    for (var i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) !== -1) {
            result.push(input[i]);
        }
    }
    console.log(result.length);
}

function count9(input) {
    var regNine = 9,
        stringNine = '9',
        result = [];
    input = input.toString().split('');
    // input = input.split('');
    for (var i = 0; i < input.length; i ++){
        if (stringNine.indexOf(input[i]) !== -1) {
            result.push(input[i]);
        }
    }
    console.log(result.length);
}
var output = 0;
for (var i = 1; i <= 100; i++) {

    output += i;
}
// console.log(output);

for (var i = 99; i > 0; i--) {
    if (i === 1) {
        console.log(i + " bottle of beer left")
    } else if (i > 1) {
        console.log(i + " bottles of beer on the wall!")
    }
}

