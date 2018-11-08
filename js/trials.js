const p = new Promise((resolve, reject) => {
    reject(3)
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));