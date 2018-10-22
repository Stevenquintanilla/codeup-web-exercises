
// ------------- PRACTICE 1
//
// Write a function, filterNumbers() that takes in an array of mixed data types and
// returns an array of only the numbers type in ascending order.
//
// Example inpu
// t: ["fred", true, 5, 3]
// Example output: [3, 5]

function filterNumbers(input) {
    var output = [];
    input.forEach(function(element) {
        if (!isNaN(parseFloat(element)) === true) {
            output.push(element);
        }
        console.log(output.sort());
    });
}
var bleh = ['fred', 8, 9, 2, 'bravo'];

filterNumbers(bleh);


// ------------- PRACTICE 2
//
// Write a function, getOlder() that takes in array of dog objects and
// increases the value of the age properties by 1.
//
// Example input: [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
//
// Example output: [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];

var myDogs = [
    {
        name: "Doggo",
        breed: "Pug",
        age: 4
    },
    {
        name: "Pupper",
        breed: "Mix",
        age: 7
    },
    {
        name: "Jasper",
        breed: "Lab",
        age: 1
    }
];
function getOlder(input) {
     input.forEach(function(element) {
         element.age += 1
     })
    // for (var i = 0; i < input.length; i++) {
    //     input[i].age += 1;
    // }
}
getOlder(myDogs);
console.log(myDogs);

// ------------- PRACTICE 3
//
// Write a function, washCars() that takes in a array of car objects and
// sets the boolean properties of isDirty to false
//
// Example input: [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]
//
// Example output:
var cars =    [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: true
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ];

function washCars(input) {
    input.forEach(function(element) {
        element.isDirty = false;
    })
}
washCars(cars);
console.log(cars);



// ------------- PRACTICE 4
//
// Write a function, adminList() that takes in an array of user objects and
// returns a count of all admins based on the isAdmin property.
// Refactor to return an array of admin-only user emails.
// Refactor again to return an array of user objects that are admins.
//
//     Example Input: [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];
//
// Example Output (before refactor): 2
//
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
//
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]


var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

function adminCount(input) {
    var output = 0;
    input.forEach(function (element) {
        if (element.isAdmin ===  true) {
            output += 1;
        }
    });
    console.log(output)
}

function adminEmails(input) {
    output = [];
    for(var i = 0; i < input.length; i++) {
        if(input[i].isAdmin === true) {
            output.push(input[i].email)
        }
    }
    console.log(output);
}

function adminList(input) {
    var output = [];
    input.forEach(function (element) {
        if (element.isAdmin === true) {
            output.push(element);
        }
    });
    console.log(output);
}

adminCount(users);
adminEmails(users);
adminList(users);


// version 1
// function adminList(users) {
//     var numberOfAdmins = 0;
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             numberOfAdmins++;
//         }
//     });
//     return numberOfAdmins;
// }

// version 2
// function adminList(users) {
//     var adminEmails = [];
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             adminEmails.push(user.email);
//         }
//     });
//     return adminEmails;
// }


// version 3


// ------------- PRACTICE 5
//
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and
// fillings and returns an array of sandwhichObjects that contain properties for bread and
// filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.
//
//     Example Input:
//
//     var breads  = [
//         "white",
//         "wheat",
//         "rhy",
//         "white"
//     ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
//
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]


var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwhichObjects(bread, filling) {
    var sandwhich = [];

    for(var i = 0; i < bread.length; i++) {
        sandwhich.push({
            breadtype: bread[i],
            fillingtype: filling[i]
        });
    }
    console.log(sandwhich);
}

makeSandwhichObjects(breads, fillings);

// functions - write them, using loops, array, objects

// var number = 3;
//
// function nameOfFunction(num) {
//     return num + 1;
// }
//
// console.log(nameOfFunction(number));
//
function addNumberTenTimes(input, added) {
    for (var i = 0; i < 10; i++) {
        input += added;
    }
    return input
}
//
console.log(addNumberTenTimes(5, 1));



// functions that change an array vs. functions that just console log the array

// var letters = ['a', 'b', 'c'];
// var originalLetters = letters.slice(0);
// letters.reverse();
// console.log(letters);
// console.log(originalLetters);
//

// arrays of objects

// var users = [
//     {
//         name: "Billy Smith",
//         age: 22
//     },
//     {
//         name: "Fred Smith",
//         age: 32
//     },
//     {
//         name: "Sally Smith",
//         age: 52
//     }
//
// ];
//
// function makeUserOlder(users) {
//     for (var i = 0; i < users.length; i += 1) {
//         // users[i].age++;
//         console.log(users[i].age);
//     }
//     return users;
// }
//
// makeUserOlder(users);
// // console.log(makeUserOlder(users));
//
//
//
// // searching for certain items in an array of objects
// function getFirst52User(users) {
//     for (var i = 0; i < users.length; i += 1) {
//         if (users[i].age === 52) {
//             return users[i];
//         }
//     }
// }
//
//
// console.log(getFirst52User(users));
