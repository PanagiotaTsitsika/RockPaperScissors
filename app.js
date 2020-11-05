let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const scissor_div = document.getElementById("scissor");
const paper_div = document.getElementById("paper");


function getComputerChoice() {
    const choices = ["rock", "scissor", "paper"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function win(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalize(userChoice)}${smallUser} beats ${capitalize(computerChoice)}${smallComputer}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}


function lose(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalize(userChoice)}${smallUser} loses to ${capitalize(computerChoice)}${smallComputer}. You lose!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}
function draw(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalize(userChoice)}${smallUser} equals ${capitalize(computerChoice)}${smallComputer}. It's a draw!`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissor":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    scissor_div.addEventListener('click', () => game("scissor"));
    paper_div.addEventListener('click', () => game("paper"));
}

main();