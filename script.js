$(document).ready(function(){
    var messages = $('#messages');
    var guessInput = $('#guess');
    var newGameBtn = $('#newgame');
    var cheatBtn = $('#cheat');
    var submitBtn = $('#submit');
    var answer = Math.floor((Math.random() * 100) + 1);
    var guesses = [];
    var distance = 0;
    var previousDistance = 0;
    var guess; 


    function getGuess() {
        var guess = parseInt(guessInput.val());
        if (guess !== null && $.isNumeric(guess) && (0 < guess < 101)) {
            guessInput.val('');
            return guess;
        }
        guessInput.val('');
        return null;
    }

    function notifyGameWon() {
        messages.text('You Win');
        submitBtn.fadeOut("fast");
    }

    function notifyHotOrCold() {
        var response = "";
        if (previousDistance > distance) {
            response += "Getting Hotter";
            if (guess > answer) {
                response += " Guess Lower";
            } else {
                response += " Guess Higher";
            }
        } else if (previousDistance < distance) {
            response += "Getting Colder!";
             if (guess > answer) {
                response += " Guess Lower";
            } else {
                response += " Guess Higher";
            }
        } else {
            response += "Umm Guess a Different Number";
        }
        messages.text(response)
    }   

    // Event Handlers
    submitBtn.click(function() {
            guess = getGuess();
        if (guess !== null) {
            previousDistance = distance;
            distance = Math.abs(guess - answer);
            if (distance == 0) {
                notifyGameWon();
            } else {
                notifyHotOrCold();
            }
        } else {
            messages.text("Pick A Number Between 1 and 100");
        }
    });  
            /*
               if (isNaN(previousDistance)) {
                    

                    if (guess > answer) {
                        messages.text('Guess Lower!');
                    } else if (guess < answer) {
                        messages.text('Guess Higher!');
                    } else if (distance > previousDistance) {
                        if (guess > answer) {  
                        messages.text('Getting Colder! Guess Lower!');
                        }
                    } else if (guess < answer) {
                        messages.text('Getting Colder! Guess Higher!');
                    }
                    
                    } else if (distance < previousDistance) {
                        if (guess > answer) {
                        messages.text('Getting Hotter! Guess Lower!');
                    } else if (guess < answer) {
                        messages.text('Getting Hotter! Guess Lower!');
                    }
                    
                    } else {
                        messages.text('Guess must be between 1 and 100');
                    }
                }
            }
            */
    
    cheatBtn.click(function() {
        alert(answer);
    });
    
    newGameBtn.click(function() {
        location.reload();
        answer = Math.floor((Math.random() * 100) + 1);
        guesses = [];
        distance = null;
        previousDistance = null;

    });

});