const wait = (number) => { return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(`You will see this after ${number / 1000}`))
        }, number);
    });
};
wait(2000);

//Use this if there is no console.log inside resolve:
// wait(1000).then(() => console.log(`You will see this after ${number.toString()[0]} seconds`));

// data => console.log(data[0].created_at)


const enterUsername = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': '91055e9c7c4080fe1946e7647749e7caaf820e51'}})
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].type === "PushEvent") {
                        let lastPush = data[i].repo.url;
                        console.log(lastPush);
                        return fetch(`${lastPush}/commits/`, {headers: {'Authorization': '91055e9c7c4080fe1946e7647749e7caaf820e51'}})
                    }
                }
            })
        .then(response => response.json())
        .then(data => console.log(data));
};

console.log(enterUsername("Stevenquintanilla"));