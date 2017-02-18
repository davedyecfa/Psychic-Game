   

        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessesSoFar = [];
        var userGuess = [];
        var chars = "abcdefghijklmnopqrstuvwxyz";
        var computerLetter =  " ";
       
    
        document.onkeypress = function(event) {
        var getRandomLetter = chars[Math.floor(Math.random() * chars.length)];
        computerLetter = getRandomLetter;
        console.log("Random Letter: " + computerLetter);
            userGuess = event.key;
            guessesSoFar.push(event.key);
        console.log("User Guess: " + userGuess);
            if (userGuess === computerLetter) {
                wins++
             }
                         
           if (userGuess != computerLetter) {
                losses++ 
            }
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("loss").innerHTML = losses;
          document.getElementById("userGuesses").innerHTML = guessesSoFar;
          guessesLeft--;
          document.getElementById("guessesLeft").innerHTML = guessesLeft;
            console.log(userGuess);
            if (guessesLeft == 0)
                alert("Game Over :( Please Reload the page to play again")
            }
      
           




       
        
