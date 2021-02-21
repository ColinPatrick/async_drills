document.addEventListener('DOMContentLoaded', (event) => {

    // function showMessage(message) {
    //     console.log(message);
    // };

    // showMessage("Hello, friend.");

    // setTimeout(function() {
    //     showMessage("Hello, Elliot.");
    // }, 2000);

    // function getWords(word1, word2, word3, word4) {
    //     console.log(`${word1} - No Delay`);
    //     setTimeout(function() {console.log(`${word2} - Delay: 3 seconds`)}, 3000);
    //     setTimeout(function() {console.log(`${word3} - Delay: 2 seconds`)}, 5000);
    //     setTimeout(function() {console.log(`${word4} - Delay: 1 second`)}, 6000);
    // };

    // getWords("First", "Second", "Third", "Fourth");


    // const done = () => {
    //     console.log("Job's done!");
    // }

    // function countdown(num, callback) {
    //     let number = num
    //     if (number > 0) {
    //       console.log(number)
    //       number--;
    //       setTimeout(function () { countdown(number, callback) }, 1000);
    //     } else {
    //         callback();
    //     };
    // };

    // countdown(6, done);

    let lunchTime = true;

    const orderMeSomeFood = (() => {
        return new Promise((resolve, reject) => {
            if (lunchTime === true) {
                let lunchOrder = {
                    lunch: "Thai food",
                    drink: "IPA"
                }
                resolve(lunchOrder);
            } else {
                let err = new Error("NO SOUP FOR YOU!");
                reject(err);
            };
        });
    });

    orderMeSomeFood()
    .then((results) => {
        return console.log(results);
    })
    .catch((error) => {
        return console.log(error);
    });

});