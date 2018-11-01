// ======= BONUS 1 Problems
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// *** hints for these problems and additional bonuses are below
// PROBLEM 1 - create an array of the first letters of each fruit
// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// PROBLEM 4 - determine the average age of customers

let firstLetterFruits = fruits.map(firstLetter => firstLetter.charAt(0));

console.log(firstLetterFruits);

let userObject = customers.map(({name, age}) => {
    return {name, age};
});

console.log(userObject);

let civilServants = customers.map(customer => {
    if (customer.occupation === 'Teacher' || customer.occupation === 'Police Officer') {
        return customer;
    }
});

console.log(civilServants);

let totalCustomerAge = customers.reduce((total, user) => {
    return total + user.age;
}, 0);

const averageCustomerAge = parseFloat(totalCustomerAge / customers.length);

console.log(averageCustomerAge.toFixed(2));
