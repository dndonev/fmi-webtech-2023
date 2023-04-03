
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // server call
        resolve({ name: 'John', age: 20});
      }, 1000);
});

let user = null;

promise
    .then((value) => {
        user = value;
        console.log('Username', user.name);
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                // server call
                resolve(5);
            }, 1000);
        });
    })
    .then((value) => {
        user = value;
        console.log('Age', user.age);
        return value;
    })
    .catch((error) => {
        console.log('OERORORORORORO', error?.message);
    });
    