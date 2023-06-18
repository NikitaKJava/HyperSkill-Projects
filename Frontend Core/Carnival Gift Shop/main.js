let input = require("sync-input");

let tickets = 0;
let gifts = [
    {id: 1, name: "Teddy Bear", cost: 10},
    {id: 2, name: "Big Red Ball", cost: 5},
    {id: 3, name: "Huge Bear", cost: 50},
    {id: 4, name: "Candy", cost: 8},
    {id: 5, name: "Stuffed Tiger", cost: 15},
    {id: 6, name: "Stuffed Dragon", cost: 30},
    {id: 7, name: "Skateboard", cost: 100},
    {id: 8, name: "Toy Car", cost: 25},
    {id: 9, name: "Basketball", cost: 20},
    {id: 10, name: "Scary Mask", cost: 75},
];

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!");

function listOfGifts() {
    console.log("Here's the list of gifts:\n");
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`)
    });
}

listOfGifts();
processInput();

function processInput() {
    while (true) {
        let select = input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n");
        switch (select) {
            case "1":
                if (gifts.length === 0) {
                    console.log("Wow! There are no gifts to buy.");
                    break;
                } else {

                    let chose = Number(input("Enter the number of the gift you want to get: "));
                    if (isNaN(chose)) {
                        console.log("\"Please enter a valid number!");
                        break;
                    }

                    let giftIndex = gifts.map(e => e.id).indexOf(chose);
                    if (giftIndex === -1) {
                        console.log("There is no gift with that number!");
                        break;
                    }

                    if (tickets < gifts[giftIndex].cost) {
                        console.log("You don't have enough tickets to buy this gift.");
                        console.log("Total tickets: " + tickets);
                        break;
                    } else {
                        tickets -= gifts[giftIndex].cost;
                        console.log("Here you go, one " + gifts[giftIndex].name + "!");
                        gifts.splice(giftIndex, 1);
                        console.log("Total tickets: " + tickets);
                        break;
                    }
                }
            case "2":
                let amount = Number(input("Enter the ticket amount: "));
                if (amount >= 0 && amount <= 1000 && (tickets + amount) <= 1000 && !isNaN(amount)) {
                    tickets += amount;
                    console.log("Total tickets: " + tickets);
                    break;
                } else {
                    console.log("Please enter a valid number between 0 and 1000.");
                    break;
                }
            case "3":
                console.log("Total tickets: " + tickets);
                break;
            case "4":
                listOfGifts();
                break;
            case "5":
                console.log("Have a nice day!");
                return;
            default:
                console.log("Please enter a valid number!");
        }
    }
}
