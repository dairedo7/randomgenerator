const btn = document.getElementById("btn");
const output = document.getElementById("random-number");
const btn2 = document.getElementById("btn-2");
const output2 = document.getElementById("random-number-2");
const btn3 = document.getElementById("btn-3");
const output3 = document.getElementById("random-number-3");
const btn4 = document.getElementById("btn-4");
const output4 = document.getElementById("random-number-4");

// btn.addEventListener("click", () => {
//     output.innerHTML = getRandomNumber(1, 10);
// })

// Random Generato's Logic

function getRandomNumber(start, range) {
    let result = Math.floor(Math.random() * (range - start + 1)) + start;

    return result;
}

// Adding arrays with players names
function createArrayOfNumbersFirst(start, end) {
    let myArray = ["bikerush", "Drive", "Futurama", "Masterleaf", "Green_ZERO", "-ThaNaToS-",
        "Shoktrepet", "a.sEnNa", "DuneTiger", "Eclipse"];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

function createArrayOfNumbersSecond(start, end) {
    let myArray = ["OneVISION", "DVMIR", "hspx", "Whitey", "OnchyOnchy", "Lumos",
        "Lamas", "Sjon111", "Aggressor_Ru", "CTpayC"];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

function createArrayOfNumbersThird(start, end) {
    let myArray = ["Dairedo ", "Mustrёn", "hulk", "Booka", "GwaspaRi", "lucas19",
        "scorpua", "Libo", "Pennywise", "ChaoSiT"];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

function createArrayOfNumbersForth(start, end) {
    let myArray = ["RTS_At0mic", "AssassinSpy", "Rildcom", "PlanEden", "sharpsense", "Aweg1",
        "RandomnessFt", "De'Vourer42", "Render", "Ama3arashi"];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

//First generation of players randomly picked when clicked on btn

let numbersArray = createArrayOfNumbersFirst();

btn.addEventListener("click", () => {
    if (numbersArray == 0) {
        output.innerHTML = "All players have been seeded!";
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

//Second generation of players randomly picked when clicked on btn-2

let numbersArray2 = createArrayOfNumbersSecond();


btn2.addEventListener("click", () => {
    if (numbersArray2 == 0) {
        output2.innerHTML = "All players have been seeded!";
        output2.style.fontSize = '18px';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray2.length - 1);
    let randomNumber = numbersArray2[randomIndex];
    numbersArray2.splice(randomIndex, 1);
    output2.style.fontSize = '30px';
    output2.style.marginBottom = '30px';

    output2.innerHTML = randomNumber;
})

//Third generation of players randomly picked when clicked on btn-3

let numbersArray3 = createArrayOfNumbersThird();


btn3.addEventListener("click", () => {
    if (numbersArray3 == 0) {
        output3.innerHTML = "All players have been seeded!";
        output3.style.fontSize = '18px';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray3.length - 1);
    let randomNumber = numbersArray3[randomIndex];
    numbersArray3.splice(randomIndex, 1);
    output3.style.fontSize = '30px';
    output3.style.marginBottom = '30px';

    output3.innerHTML = randomNumber;
})

//Forth generation of players randomly picked when clicked on btn-4

let numbersArray4 = createArrayOfNumbersForth();``


btn4.addEventListener("click", () => {
    if (numbersArray4 == 0) {
        output4.innerHTML = "All players have been seeded!";
        output4.style.fontSize = '18px';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray4.length - 1);
    let randomNumber = numbersArray4[randomIndex];
    numbersArray4.splice(randomIndex, 1);
    output4.style.fontSize = '30px';
    output4.style.marginBottom = '30px';

    output4.innerHTML = randomNumber;
})

