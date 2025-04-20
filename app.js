let userScoreNumber = 0;
let compScoreNumber = 0;
let userWin = true;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compChoiceContainer = document.querySelector(".show-comp-choice");
const compChoiceImg = document.querySelector("#comp-image");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

//Get a random Computer Choice
const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

//Print the computer choice
const printCompChoice = (compChoice) => {
    compChoiceContainer.classList.remove("hide");
    if (compChoice === "rock") {
        compChoiceImg.setAttribute("src", "./images/rock.png");
    }
    else if (compChoice === "paper") {
        compChoiceImg.setAttribute("src", "./images/paper.png");
    }
    else {
        compChoiceImg.setAttribute("src", "./images/scissors.png");
    }
}

//If the Game is Draw
let drawGame = (compChoice) => {
    printCompChoice(compChoice);
    msg.innerText = "It's a Draw ! Try Again!!";
    msg.style.backgroundColor = "black";
}

//IF the Player won the game
const winScreen =(userChoice,compChoice)=>{
    printCompChoice(compChoice);
    msg.innerHTML=` Congratulation You Win! your <b style="color:black;">${userChoice}</b> beats Computers <b style="color:black;">${compChoice}</b> `;
    msg.style.backgroundColor="green";
    userScoreNumber++;
    userScore.innerText=userScoreNumber;
}

//if the player lost the game
const looseScreen=(userChoice,compChoice)=>{
    printCompChoice(compChoice);
    msg.innerHTML=`Sorry You Lost! Computers <b style="color:black;">${compChoice}</b> beats your <b style="color:black;">${userChoice}</b> `;
    msg.style.backgroundColor="red";
    compScoreNumber++;
    compScore.innerText=compScoreNumber;
}

//Check Wheather the player has won or lost
const checkResult = (userWin, userChoice, compChoice)=>{
    if (userWin) {
        winScreen(userChoice, compChoice);
    } else {
        looseScreen(userChoice, compChoice);
    }
}

//Main Game
const playGame = (userChoice) => {
    let compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame(compChoice);
    }
    else if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
        checkResult(userWin, userChoice, compChoice);
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
        checkResult(userWin, userChoice, compChoice);
    } else {
        userWin = compChoice === "rock" ? false : true;
        checkResult(userWin, userChoice, compChoice);
    }
}

//Add event listner to the divs
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //get user choice
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});