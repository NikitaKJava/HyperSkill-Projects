//Write your code here
let input = require('sync-input');

ratesToUSD = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log(`\nWelcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

function checkValidation(str) {
    let currency = ["USD", "JPY", "EUR", "RUB", "GBP"];
    return currency.includes(str);
}

function init() {
    let userInput
    while (true) {
        userInput = Number(input("What do you want to do?\n1-Convert currencies 2-Exit program\n"));
        if (isNaN(userInput)) {
            console.log("Unknown input");
        } else {
            break;
        }
    }
    switch (userInput) {
        case 1:
            return inputData();
        case 2:
            return console.log("Have a nice day!");
        default:
            console.log("Unknown input");
            return init();
    }
}


function inputData() {
    let userInput1
    let userInput2;
    while (true) {
        console.log("What do you want to convert?");
        userInput1 = input("From: ").toUpperCase();
        if (!checkValidation(userInput1)) {
            console.log("Unknown currency");
        } else {
            break;
        }
    }

    while (true) {
        userInput2 = input("To: ").toUpperCase();
        if (!checkValidation(userInput2)) {
            console.log("Unknown currency");
        } else {
            return convert(userInput1, userInput2);
        }
    }
}

function convert(input1, input2) {

    let currency1 = ratesToUSD[input1.toUpperCase()];
    let currency2 = ratesToUSD[input2.toUpperCase()];

    let amount;
    while (true) {
        amount = Number(input("Amount: "));
        if (amount < 0 || amount === null) {
            console.log("The amount cannot be less than 1");
        } else if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else {
            currency1 === currency2 ? currency1 = currency2 = 1 : currency1;

            console.log(`Result: ${amount} ${input1.toUpperCase()} equals ${(amount / currency1 * currency2).toFixed(4)} ${input2.toUpperCase()}`);
            return init();
        }
    }
}

init();
