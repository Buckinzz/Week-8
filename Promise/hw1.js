function promise1() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

    function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if (errorBoolean) {
        resolve("Your data you asked for.");
        } else {
            reject("There was an error");
        }
    });
}

promise2(true)
    .then((success) => {
    console.log(success);
    })
    .catch((failure) => {
    console.log(failure);
    });

const promise3 = new Promise((resolve, reject) => {resolve("promise 3 complete")});
const promise4 = new Promise((resolve, reject) => {resolve("Promise 4 complete")});
const promise5 = new Promise((resolve, reject) => {resolve("Promise5 complete")});

promise3
    .then((success) => {
    console.log(success);
    })

    .catch((failure) => {
    console.log(failure);
    });


Promise.all([promise3, promise4, promise5])
    .then((success) => {
    console.log(success);
    })

    .catch((failure) => {
    console.log(failure);
    });

    
    let xhr = new XMLHttpRequest();


    xhr.open("GET", "http://api.icndb.com/jokes/15", true);


    xhr.onload = function() {
    console.log(JSON.parse(this.responseText).value.joke);
};

xhr.send();