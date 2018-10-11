(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        "firstName": "Rick",
        "lastName": "Sanchez",
        "sayHello": function() {
            return "Hello from " + person.firstName + " " + person.lastName;
        }
    };
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function hebDiscount (shoppers){
            var discountOff = 0,
                total = shoppers.amount;
        if (shoppers.amount > 200) {
                    discountOff = .12;
                    total = shoppers.amount - (shoppers.amount * discountOff);
        }
            return shoppers.name + " has spent " + shoppers.amount + " with a discount of " +
                discountOff + ". He now owes " + total;
    }
    shoppers.forEach(function(element) {
        console.log(hebDiscount(element));
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var bookDetails = {};

    var alphabet = ['a', 'b', 'c'];
var books = [
    {
        "title" : "The Stand",
        "author": {
            "firstName" : "Stephen",
            "lastName" : "King"
        }
    },
    {
        "title" : "The Great Gatsby",
        "author": {
            "firstName" : "F. Scott",
            "lastName" : "Fitzgerald"
        }
    },
    {
        "title" : "Ulysses",
        "author": {
            "firstName" : "James",
            "lastName" : "Joyce"
        }
    },
    {
        "title" : "To The Lighthouse",
        "author": {
            "firstName" : "Virginia",
            "lastName" : "Woolf"
        }
    },
    {
        "title" : "War and Peace",
        "author": {
            "firstName" : "Leo",
            "lastName" : "Tolstoy",
        }
    }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(element, index) {
       console.log("Book # " + (index + 1));
       console.log("Title: " + element.title);
       console.log("Author: " + element.author.firstName + " " + element.author.lastName);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        return {
            title: title,
            author : {
                firstName : author.split(' ')[0],
                lastName : author.split(' ')[1]
            }
        };
    }
    // console.log("true hero", "Dan Danson");
    function createBookArray() {
        do {
            var userTitle= prompt("Give the book a title"),
                userFirstName= prompt("Give the author's first name"),
                userLastName= prompt("Give the author's last name"),
                bookStorage = [];

            var book = createBook(userTitle, userFirstName, userLastName);
            book.push(bookStorage[0]);


           var userConfirm = confirm("Do you want to add an another book?");

        } while(userConfirm === true);

        return console.log(bookStorage);
    }

    createBookArray();


})();
