var blogPost = {};


blogPost = {
    author: "Steven Quintanilla",
    averageRating: 5,
    datePosted: "10/11/2018",
    title: "My day on a Thursday",
    noOfShares: 10,
    noOfViews: 20,
    isFlagged: true,
    lastUpdated: "10/11/2018",
    content: "My day on a Thursday is just me wishing it was Friday"
};

blogPost.author = "Steven Quintanilla";
blogPost.averageRating = 5;
blogPost.datePosted = "10/11/2018";
blogPost.title = "My day on a Thursday";
blogPost.noOfShares = 10;
blogPost.noOfViews = 20;
blogPost.isFlagged = true;
blogPost.lastUpdated = "10/11/2018";
blogPost.content = "My day on a Thursday is just me wishing it was Friday";

function makeCar(userMake, userModel) {
     var car = {
        make : userMake,
        model : userModel
    };

    return car;
}

var salesReport = {
    title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {
        employeeNumber: "1",
        firstName: "Jane",
        lastName: "Janeway",
        salesUnits: "3"
    }, {
            employeeNumber: "6",
            firstName: "Chet",
            lastName: "Chedderson",
            salesUnits: "8"
        }, {
            employeeNumber: "8",
            firstName: "Dale",
            lastName: "Dalesinger",
            salesUnits: "1"
        }
    ]
};

function getEmployeeCount(userSalesReport) {
        return "number of employees: " + userSalesReport.employees.length;


}


function getTotalNumberOfSales(userSalesReport) {
    var totalSales = 0;
        userSalesReport.employees.forEach(function(element) {
        totalSales += parseFloat(element.salesUnits);
    });
    return totalSales;
}

function getAverageNumberOfSales(userSalesReport) {
    var totalSales = getTotalNumberOfSales(userSalesReport);

    return parseFloat(totalSales / 3);

}


var dog = {
    breed : "Corgi",
    weightInPounds : 25,
    age : 5,
    color: "brown and white",
    sterilized: false,
    shotRecords: [
        {
        date: "10/10/2014",
        typeOfShot: "Leptospirosis"
    } ],
    bark: function() {
        return "bark bark mutha******";
    },
    getOlder : function() {
        this.age += 1;
    },
    toFix: function() {
         this.sterilized = true;
    },
    takeVaccinate: function(nameOfVaccine, dateOfVaccine) {
        var anotherVaccine =  {
            date: dateOfVaccine,
            typeOfShot: nameOfVaccine
        } ;
        return dog.shotRecords.push(anotherVaccine);
    }
};


var books = [
    {
        "title" : "The Stand",
        "author": {
            "firstName" : "Stephen",
            "lastName" : "King"
        },
        "keywords" : "Horror",
        "isAvailable" : true,
        "dateAvailable" :  new Date(Date.now()),
        "lend" : function() {
            this.isAvailable = false;
            this.dateAvailable = new Date(Date.now() + 12096e5);
        },
        "receive" : function() {
            this.isAvailable = true;
            this.dateAvailable = new Date(Date.now());
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

function createBook(title, firstName, lastName) {
    var book = {
        "title" : title,
        "author" : {
            "firstName" : firstName,
            "lastName" : lastName
        }
    };
    return book;
}

function createBookArray() {
    var bookStorage = [];
    do {
        var userTitle= prompt("Give the book a title"),
            userFirstName= prompt("Give the author's first name"),
            userLastName= prompt("Give the author's last name");

        bookStorage.push(createBook(userTitle, userFirstName, userLastName));


        var userConfirm = confirm("Do you want to add an another book?");

    } while(userConfirm);

    return bookStorage;
}


function editBookArray(book) {
    var userRemove = parseFloat(prompt('Give the index of the book you want to remove'));
    var removeBook = bookStorage
}

var arrayTest = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arrayTest.join(' '));
