// Now lets plan out the javascript infrastructure 

//global javascript code 
document.addEventListener("DOMContentLoaded", function() {
    let controlButtons = document.getElementsByClassName("control-button")

    for (let conButton of controlButtons) {
        conButton.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "higher") {
                alert(`On a High?`);
            } else {
                alert(`Feeling low?`);
            }
        })
    }
    runGame();

})

//run game loop 

function runGame("higher") {
    document.getElementById("player-slot").value = 0;
    document.getElementById("comp-slot").value = 0;
    document.getElementById("operator").value = 0;
    document.getElementById("operand").value = 0;

}