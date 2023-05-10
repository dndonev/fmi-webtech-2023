const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('User');
    }, 1000);
});
const getUserDetails = () => console.log('DETAILS');

promise
    .then((user) => {
        getUserDetails(user)
    });

const getUser = async () => {
    try {
        console.log(await promise);
        getUserDetails();
    } catch (e) {
        console.log(e);
    }
}

getUser();
