var number = 2;
console.log("test");
// while (number <= 65536) {
//     console.log(number);
//     number = number * 2;
// }

do {
    console.log(number);
    number = number * 2;
} while (number <= 65536);
console.log("\n------\n");

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesPerCustomer = Math.floor(Math.random() * 5) + 1;
    if (allCones >= 0) {
        if (allCones - conesPerCustomer < 0) {
            console.log("Cannot sell you " + conesPerCustomer +
                " I only have " + allCones);
        } else {
            allCones = allCones - conesPerCustomer;
            console.log(conesPerCustomer + " cones sold... " +
            allCones + " left");
        }
    }
} while(allCones > 0);

console.log("I have " + allCones + " left! Yay I sold them all!");
