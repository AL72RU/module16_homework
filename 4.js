function evenOrOdd(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myFunction() {
    const myPromise = new Promise((resolve, reject) => {
        let number = random(1, 100);
        let number2 = evenOrOdd(number);
        if (number2 === "Odd") {
            resolve("Завершено успешно. Сгенерированное число — " + number);
        } else {
            reject("Завершено с ошибкой. Сгенерированное число — " + number);
        }
    })

    myPromise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

console.log("Старт");
setTimeout(myFunction, 3000);
document.getElementsByClassName