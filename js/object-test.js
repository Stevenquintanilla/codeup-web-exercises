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
    console.log(getEmployeeCount(salesReport));


function getTotalNumberOfSales(userSalesReport) {
    var totalSales = 0;
        userSalesReport.employees.forEach(function(element) {
        totalSales += parseFloat(element.salesUnits);
    });
    return totalSales;
}
console.log("total number of sales is " + getTotalNumberOfSales(salesReport));

function getAverageNumberOfSales(userSalesReport) {
    var totalSales = getTotalNumberOfSales(userSalesReport);

    return parseFloat(totalSales / 3);

}

console.log(getAverageNumberOfSales(salesReport));

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
        return this.age += 1;
    },
    toFix: function() {
        return this.sterilized = true;
    },
    takeVaccinate: function(nameOfVaccine, dateOfVaccine) {
        var anotherVaccine =  {
            date: dateOfVaccine,
            typeOfShot: nameOfVaccine
        } ;
        return dog.shotRecords.push(anotherVaccine);
    }
};

dog.toFix();
dog.takeVaccinate("Rabies", "5/12/2017");
console.log(dog.shotRecords);