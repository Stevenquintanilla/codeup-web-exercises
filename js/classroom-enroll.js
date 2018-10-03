"use strict";


var classMaximumCapacity = 20, studentsCurrentlyEnrolled = Math.floor((Math.random() * 20) + 1),
    studentSchedule = [ 1, 2, 3],
    classSchedulePossibleConflict =  Math.floor((Math.random() * 10) + 1),
    studentCanMakeItSchedule = studentSchedule.indexOf(classSchedulePossibleConflict);

    if (studentsCurrentlyEnrolled < classMaximumCapacity && studentCanMakeItSchedule === -1) {
        console.log('You can enroll!');
    }
    else {
        console.log("You can't enroll");
    }