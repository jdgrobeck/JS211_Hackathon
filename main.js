'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a board
let board = [];
// Empty solution
let solution = '';

// // solution words
// let words = ['elephant', 'gymnasium', 'parking', 'cookie', 'settlement', 'flag', 'mountain', 'vacation', 'umbrella', 'bingo'];
// // Letters player can guess
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Generates random solution. 
let words = ['elephant', 'gymnasium', 'parking', 'cookie', 'settlement', 'flag', 'mountain', 'vacation', 'umbrella', 'bingo', 'blackjack', 'patio', 'queue', 'dynamite', 'kaleidoscope', 'album', 'gigantic', 'jet', 'typewriter', 'helium'];

// Letters player can guess
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


let randomSolution = Math.floor(Math.random() * words.length)

// console.log(words[randomSolution])

//Getting undefined when entering a letter

let correctGuessArray = [];

//Main function
const hangMan = (guess) => {
    guess = guess.toLowerCase().trim()  
    let solutionArray = words[randomSolution].split(''); 
    let hasBeenChanged = false;

for(let i=0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guess) {
      hasBeenChanged = true;
      correctGuessArray.push(i);
    }

} 

if (hasBeenChanged) {
  return "You guessed correctly!"
}

else {
  return "Incorrect! Guess again."
}


} // end of hangMan



// push underscores from word generated from randomSolution 
const printSolutionBoard = () => {
    const underscoredWords = words[randomSolution].split('')
    const joinedWords = []
    for (let i = 0; i < underscoredWords.length; i++) { // iterating through the solution word
        let guessedLetter = '' // defining new variable
      
        
        if (correctGuessArray.includes(i)){  // if correctGuessArray includes index of letter, we're iterating through
          guessedLetter = underscoredWords[i] // Assigned guess letter to letter in solution word
        }

        else {
          guessedLetter = '_'
    
        }
       joinedWords.push(guessedLetter) // Push letter program found to guessedLetter
      } // end of for loop

      console.log(joinedWords.join(' '))

      if(!joinedWords.includes('_')){ // If there are no more underscores, you win
        console.log(`You win! The word was ${words[randomSolution]}. Enter a letter to play again.`)
        return true;
      }
      else {
        return false;
      }
   
    

} // end of printSolutionBoard

const getPrompt = () => {
    let isComplete = printSolutionBoard();
    if(isComplete){
      randomSolution = Math.floor(Math.random() * words.length)

      correctGuessArray = [];
      getPrompt();
    }
    rl.question('Enter a letter ', (guess) => {
      console.log( hangMan(guess) );
      getPrompt();
    });
    
}

  getPrompt();