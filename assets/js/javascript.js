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
//Resets all the board    
    document.getElementById("player-slot").value = Number(0);
    document.getElementById("comp-slot").value = Number(0);
    document.getElementById("operator").value = Number(0);
    document.getElementById("operand").value = Number(0);
    document.getElementsByClassName("myOptions").value = Number(0);
    document.getElementsByClassName("compOptions").value = Number(0);

// player and computer numbers are randomly generated at the beginning of the match
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = Math.floor(Math.random() * 10) + 1;
    let num4 = Math.floor(Math.random() * 10) + 1;
    let num5 = Math.floor(Math.random() * 10) + 1;
    let num6 = Math.floor(Math.random() * 10) + 1;

    giveNumbers(num1, num2, num3, num4, num5, num6);
}

//distribute numbers 
function giveNumbers(num1, num2, num3, num4, num5, num6) {
    document.getElementById("myOption1").textContent = num1;
    document.getElementById("myOption2").textContent = num2;
    document.getElementById("myOption3").textContent = num3;
    
    document.getElementById("compOption1").textContent = num4;
    document.getElementById("compOption2").textContent = num5;
    document.getElementById("compOption3").textContent = num6;
}