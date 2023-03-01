let board = [];
// Empty solution


// I want the blank solution board to appear as the page loads
//Where to call hangMan? Submit button?


window.onload = function (){
    printSolutionBoard()
    
  
  }

let words = ['elephant', 'gymnasium', 'parking', 'cookie', 'settlement', 'flag', 'mountain', 'vacation', 'umbrella', 'bingo', 'blackjack', 'patio', 'queue', 'dynamite', 'kaleidoscope', 'album', 'gigantic', 'jet', 'typewriter', 'helium'];

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


let randomSolution = Math.floor(Math.random() * words.length)

let correctGuessArray = [];

//where do I call this on the html page?
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
  document.getElementById('message').innerHTML = "You guessed correctly!"
}

else {
  document.getElementById('message').innerHTML = "Incorrect! Guess again."
}

}

const printSolutionBoard = () => {
    
    const underscoredWords = words[randomSolution].split('')
    const joinedWords = []
    for (let i = 0; i < underscoredWords.length; i++) { 
        let guessedLetter = ''
      
    
        if (correctGuessArray.includes(i)){  
          guessedLetter = underscoredWords[i] 
        }

        else {
          guessedLetter = '_'
    
        }
       joinedWords.push(guessedLetter) 
      } 

      console.log(joinedWords.join(' '))
      document.getElementById('solution-board').innerHTML = joinedWords.join(' ')
      //changed above line
      

      if(!joinedWords.includes('_')){
        
        document.getElementById('message').innerHTML = `You win! The word was ${words[randomSolution]}. Enter a letter to play again.`
        return true;
      }
      else {
        return false;
      }

      
      
      
    }

    
   
    const clearInput = () => {
      document.getElementById('user-input').value = ''
    }

    const handleUserInput = () => {
      hangMan(document.getElementById('user-input').value)
      getPrompt()
      clearInput()
    }
    
//reinstituted getPrompt
    const getPrompt = () => {
        let isComplete = printSolutionBoard();
        if(isComplete){
          randomSolution = Math.floor(Math.random() * words.length)
    
          correctGuessArray = [];
          getPrompt();
        }
        
    }

    //if building termianl application, terminal is UI
    //convert terminal methods to DOM methods