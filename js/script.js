const btn = document.getElementById("btn");
const output = document.getElementById("random-number");

// btn.addEventListener("click", () => {
//     output.innerHTML = getRandomNumber(1, 10);
// })


function getRandomNumber(start, range) {
    let result = Math.floor(Math.random() * (range - start + 1)) + start;

    return result;
}


function createArrayOfNumbers(start, end) {
    let myArray = [];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}


let numbersArray = createArrayOfNumbers(1, 16);


btn.addEventListener("click", () => {
    if (numbersArray == 0) {
        output.innerHTML = "All players have just been assigned their opponents!";
        output.style.fontSize = '18px';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    output.style.fontSize = '30px';
    output.style.marginBottom = '30px';

    output.innerHTML = randomNumber;
})
