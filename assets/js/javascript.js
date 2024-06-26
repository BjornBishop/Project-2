// Now lets plan out the javascript infrastructure 

//global javascript code 
document.addEventListener("DOMContentLoaded", function() {
    let controlButtons = document.getElementsByClassName("control-button")

    for (let conButton of controlButtons) {
        conButton.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "higher") {
                alert(`On a High?`);
                let gameType = this.getAttribute("data-type");
                runGame("higher");
            } else {
                alert(`Feeling low?`);
                runGame("lower");
            }
        })
    }
    runGame();

})

//run game loop 

function runGame() {
    // Resets all the board
    document.getElementById("player-slot").value = 0;
    document.getElementById("comp-slot").value = 0;
    document.getElementById("operator").value = 0;
    document.getElementById("operand").value = 0;
    
    //fetch the current value of the cards
    let myCard1 = parsInt(document.getElementById("myOption1").value);
    let myCard2 = parsInt(document.getElementById("myOption2").value);
    let myCard3 = parsInt(document.getElementById("myOption3").value);

    let compCard1 = parsInt(document.getElementById("compOption1").value);
    let compCard2 = parsInt(document.getElementById("compOption2").value);
    let compCard3 = parsInt(document.getElementById("compOption3").value);

    // Player and computer numbers are randomly generated at the beginning of the match
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = Math.floor(Math.random() * 10) + 1;
    let num4 = Math.floor(Math.random() * 10) + 1;
    let num5 = Math.floor(Math.random() * 10) + 1;
    let num6 = Math.floor(Math.random() * 10) + 1;

    
}

// Distribute numbers to players
