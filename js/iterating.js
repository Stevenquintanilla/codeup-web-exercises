(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        var names = ['Steven', 'Andrew', 'Zach', 'Chris'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (element, index, array) {
        console.log(element);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function firstItem(nameArray) {
        console.log(nameArray[0]);
    }
    function secondItem(nameArray) {
        console.log(nameArray[1]);
    }
    function lastItem(nameArray) {
        console.log(nameArray[nameArray.length - 1]);
    }
    console.log("---------");
    firstItem(names);
    secondItem(names);
    lastItem(names);


})();

var allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                'Saturday', 'Sunday'];
var test = ['a', 'aa', 'aaa', 'aaaa'];

function randomDay(day) {
    var randomGen = Math.ceil(Math.random() * day.length - 1);
    return day[randomGen];
}




function indexForAlphabet(input) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
        'o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.indexOf(input);
}


function rest(input) {
    return input.slice(1);
}

console.log(rest(allDays));

function getLongestString(input) {
    var LongString = "";
    input.forEach(function (element) {
        if (LongString.length < element.length) {
            LongString = element;
        }
    })
    return LongString;
}

function getShortestString(input) {
    var ShortString = "                     ";
    input.forEach(function (element) {
        if (ShortString.length > element.length) {
            ShortString = element;
        }
    });
    return ShortString;
}


function addTwoArrays(firstArray, secondArray) {
    var output = firstArray.concat(secondArray);
    return output
}

function reverseArray(input) {
    return input.reverse();
}

function getIndexesOf(input) {

}