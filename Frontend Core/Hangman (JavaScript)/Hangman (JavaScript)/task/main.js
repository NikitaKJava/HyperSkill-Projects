// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
let attempt = 8;
let wins = 0;
let losses = 0;
let arraySecrets = ["python", "java", "swift", "javascript"];

console.log("H A N G M A N" + " // " + attempt + " attempts");

let init;
let improvement;
let caseSense;
let guessedLetters = [];

function isUppercase(str) {
    return /[A-Z]/.test(str);
}

// Make sure letter is lowercase english letter
function isLowercaseEnglish(str) {  // Make sure prompt letter is lowercase English letter;
    return /[a-z]/.test(str);
}

function hangman() {
    let secret = arraySecrets[Math.floor(Math.random() * arraySecrets.length)];
    let secretWord = secret.replace(/\w/g, "-");

    while (attempt > 0) {
        improvement = true;
        let changed = false;
        let userInput;
        if (!init) {
            console.log("\n" + secretWord);
            caseSense = true;

            userInput = input("Input a letter: ");
            if (userInput.length > 1 || userInput.length === 0) {
                console.log("Please, input a single letter.");
                caseSense = false;
            }

            if (isUppercase(userInput) || !isLowercaseEnglish(userInput)) {
                console.log("Please, enter a lowercase letter from the English alphabet.");
                caseSense = false;
            }
            guessedLetters.push(userInput);
        }

        let arr = secretWord.split("");
        if (userInput !== undefined) {
            for (let i = 0; i < secret.length; i++) {
                if (secret[i] === userInput) {
                    if (arr[i] === userInput) {
                        improvement = false;
                    } else {
                        arr[i] = userInput;
                        changed = true;
                    }
                }
            }
        }
        secretWord = arr.join("");

        if (!changed && !improvement) {
            if (userInput.length === 1) {
                console.log("You've already guessed this letter.");
            }
        }

        if (!changed && improvement && caseSense && !init && userInput.length <= 1) {
            attempt--;
            console.log("That letter doesn't appear in the word. // " + attempt + " attempts");
        }

        if (!secretWord.includes("-")) {
            wins++;
            console.log("\n" + secretWord);
            console.log("You guessed the word " + secret + "!");
            console.log("\nYou survived!");
            return menu();
        }

        if (attempt === 0) {
            losses++;
            console.log("\nYou lost!");
            return menu();
        }

        if (attempt === 8) {
            init = false;
        }
    }
}

// Menu function to navigate the game
function menu() {
    attempt = 8;
    init = true;
    improvement = true;
    caseSense = true;
    guessedLetters = [];

    let menuPrompt = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    switch (menuPrompt) {
        case "play":
            hangman();
            break;
        case "results":
            console.log(`You won: ${wins} times.`);
            console.log(`You lost: ${losses} times.`);
           return menu();
        case "exit":
            return;
        default:
            return menu();
    }
}

menu();