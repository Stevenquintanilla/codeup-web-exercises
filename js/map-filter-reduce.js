
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLaungauges = users.filter(user => user.languages.length >= 3);

console.log(threeLaungauges);

let userEmails = users.map(user => user.email);

console.log(userEmails);

let userTotalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

const userAverageExp = userTotalExp / users.length;

console.log(userAverageExp);

let longestEmail = users.reduce((total, userLongestEmail) => {
   if (userLongestEmail.email.length > total.length) {
       return userLongestEmail.email;
   } else {
       return total;
   }
}, "");

console.log(longestEmail);

let allUsersOneString = users.reduce((total, user) => {
    return total + `${user.name}, `;
}, '');

allUsersOneString = allUsersOneString.substring(0, allUsersOneString.length - 2) + ".";

console.log(allUsersOneString);

let uniqueUserLanguages = users.reduce((total, user) => {
    user.languages.map(language => {
        total.push(language);
    });
    return total;
}, []);

//Set() method gets rid of dupes
uniqueUserLanguages = new Set(uniqueUserLanguages);

//Array.from() puts the set into an array
uniqueUserLanguages = Array.from(uniqueUserLanguages);

console.log(uniqueUserLanguages);