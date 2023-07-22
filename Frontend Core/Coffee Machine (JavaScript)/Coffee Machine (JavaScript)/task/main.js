// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let coffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    disposableCups: 9,
    amount: 550,
}

const beverages = {
    espresso: {
        water: 250,
        milk: 0,
        beans: 16,
        cost: 4
    },
    latte: {
        water: 350,
        milk: 75,
        beans: 20,
        cost: 7,
    },
    cappuccino: {
        water: 200,
        milk: 100,
        beans: 12,
        cost: 6,
    },

    amaretto: {
        water: 350,
        milk: 150,
        beans: 20,
        cost: 10,
    }
}

function getObjectName(objectContainer, object) {
    return Object.keys(objectContainer).find(key => objectContainer[key] === object);
}

function calcCoffee(coffee) {
    if (coffeeMachine.water >= coffee.water) {
        coffeeMachine.water -= coffee.water;
    } else {
        console.log("Sorry, not enough water!");
        return menu();
    }
    if (coffeeMachine.milk >= coffee.milk) {
        coffeeMachine.milk -= coffee.milk;
    } else {
        console.log("Sorry, not enough milk!");
        return menu();
    }

    if (coffeeMachine.beans >= coffee.beans) {
        coffeeMachine.beans -= coffee.beans;
    } else {
        console.log("Sorry, not enough beans!");
        return menu();
    }

    if (coffeeMachine.disposableCups > 0) {
        coffeeMachine.disposableCups--;
    } else {
        console.log("Sorry, not enough cups!");
        return menu();
    }

    coffeeMachine.amount += coffee.cost;

    console.log(`Your ${getObjectName(beverages, coffee)} will be served soon!\n`);
    menu();
}


function buy() {
    const userChoice = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - amaretto, back - to main menu:\n");
    switch (userChoice) {
        case "1":
            return calcCoffee(beverages.espresso);
        case "2":
            return calcCoffee(beverages.latte);
        case "3":
            return calcCoffee(beverages.cappuccino);
        case "4":
            return calcCoffee(beverages.amaretto);
        case "back":
            return menu();
        default:
            console.log("wrong input\n");
            return buy();
    }
}

function fill() {
    let fillWater;
    let fillMilk;
    let fillBeans;
    let fillCups;

    while (true) {
        fillWater = Number(input("Write how many ml of water you want to add:\n"));
        if (!isNaN(fillWater) && fillWater !== null) {
            break;
        }
        console.log("Input only numbers");
    }
    while (true) {
        fillMilk = Number(input("Write how many ml of milk you want to add:\n"));
        if (!isNaN(fillMilk) && fillMilk !== null) {
            break;
        }
        console.log("Input only numbers");
    }
    while (true) {
        fillBeans = Number(input("Write how many grams of coffee beans you want to add:\n"));
        if (!isNaN(fillBeans) && fillBeans !== null) {
            break;
        }
        console.log("Input only numbers");
    }
    while (true) {
        fillCups = Number(input("Write how many disposable cups you want to add:\n"));
        if (!isNaN(fillCups) && fillCups !== null) {
            break;
        }
        console.log("Input only numbers");
    }

    coffeeMachine.water += fillWater;
    coffeeMachine.milk += fillMilk;
    coffeeMachine.beans += fillBeans;
    coffeeMachine.disposableCups += fillCups;

    menu();
}

function take() {
    console.log(`I gave you $${coffeeMachine.amount}`);
    coffeeMachine.amount = 0;
    menu();
}

function getStatus() {

    console.log(`\nThe coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.disposableCups} disposable cups
$${coffeeMachine.amount} of money\n`)
    menu();
}

function menu() {

    const userInput = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (userInput) {
        case "buy":
            return buy();
        case "fill":
            return fill();
        case "take":
            return take();
        case "remaining":
            return getStatus();
        case "exit":
            return;
        default:
            console.log("wrong input\n");
            return menu();
    }
}

menu();