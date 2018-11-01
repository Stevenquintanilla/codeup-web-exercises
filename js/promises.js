const wait = (number) => { return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(`You will see this after ${number.toString()[0]} seconds`))
        }, number);
    });
};
wait(2000);

//Use this if there is no console.log inside resolve:
// wait(1000).then(() => console.log(`You will see this after ${number.toString()[0]} seconds`));




const enterUsername = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': '91055e9c7c4080fe1946e7647749e7caaf820e51'}})
            .then(response => response.json())

};

console.log(enterUsername("Stevenquintanilla"));