// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
let attempt = 8;
let results = {wins : 0,losses : 0};
let init;
let guessedLetters = [];

console.log("H A N G M A N // " + attempt + " attempts");

function isUpperCase(chr) {
    return /[A-Z]/.test(chr);
}

// Make sure prompt single letter is lowercase English letter
function isLowerCaseEnglish(chr) {
    return /^[a-z]$/.test(chr);
}

function hangman() {
    let word = words[Math.floor(Math.random() * words.length)];
    let hiddenWord = new Array(word.length);
    hiddenWord.fill("-");

    while (attempt > 0) {

        let userInput = "";
        if (!init) {
            console.log("\n" + hiddenWord.join(""));

            userInput = input("Input a letter: ");
            if (userInput.length < 1 || userInput.length > 1) {
                console.log("Please, input a single letter.");
                continue;
            } else if (isUpperCase(userInput) || !isLowerCaseEnglish(userInput)) {
                console.log("Please, enter a lowercase letter from the English alphabet.");
                continue;
            } else if (guessedLetters.includes(userInput) || hiddenWord.includes(userInput)) {
                if (userInput.length === 1) {
                    console.log("You've already guessed this letter.");
                }
                continue;
            }
        }

        if (userInput !== "" && userInput !== undefined) {
            let find = false;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === userInput) {
                    hiddenWord[i] = userInput;
                    find = true;
                }
            }
            if (!find && !guessedLetters.includes(userInput) && userInput.length === 1) {
                attempt--;
                console.log("That letter doesn't appear in the word. // " + attempt + " attempts");
            }
            guessedLetters.push(userInput);
        }

        if (!hiddenWord.includes("-")) {
            results.wins++;
            console.log("\nYou guessed the word " + hiddenWord.join("") + "!" + "\nYou survived!");
            return menu();
        }

        if (attempt === 0) {
            results.losses++;
            console.log("\nYou lost!");
            return menu();
        }
        init = false;
    }
}

function menu() {
    attempt = 8;
    init = true;
    guessedLetters = [];

    let menuPrompt = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    switch (menuPrompt) {
        case "play":
            return hangman();
        case "results":
            console.log(`You won: ${results.wins} times.`);
            console.log(`You lost: ${results.losses} times.`);
            return menu();
        case "exit":
            return;
        default:
            return menu();
    }
}

menu();