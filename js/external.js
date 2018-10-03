"use strict";
//Movies rent
// var moviePerDay = 3;
//
// var daysMermaidRented = prompt("How many days are you going to rent the little mermaid?");
// var daysBbearRented = prompt("How many days are you going to rent the Brother Bear?");
// var daysHerculesRented = prompt("How many days are you going to rent the Hercules?");
//
// var totalCost = (parseInt(daysMermaidRented) + parseInt(daysBbearRented) + parseInt(daysHerculesRented)) * 3;
// var alertUserTotalCost = alert("You owe $" + totalCost + "!");


// var googlePay = 400, amazonPay = 380, facebookPay = 350,
//     userGoogleHours = prompt("How many hours did you work for google?"),
//     userAmazonHours = prompt("How many hours did you work for google?"),
//     userFacebookHours = prompt("How many hours did you work for google?"),
//     userTotalPay = (parseInt(userGoogleHours) *  googlePay) + (parseInt(userAmazonHours) *  amazonPay) +
//                     (parseInt(userFacebookHours) *  facebookPay),
//     userPromptPay = alert("Your pay for this week is " + userTotalPay + "!");

var userItemsBought = prompt("How many items did you buy?"),
    isUserPremium= prompt("Are you a premium member?"),
    productNotExpired = confirm("Is the offer still valid?");

    if (parseInt(userItemsBought) >= 2 && productNotExpired === true) {
        alert("You get the product offer!");
    }
    else if (isUserPremium.toLowerCase() === "yes") {
        alert("You get the product offer!");
    }
    else {
        alert("Sorry, no product offer for you");
    }

