// avoid repetition 
// use as little public functions and variables as you can
// try to save memory and enhance performance
const boxArray = [];
const gameBoard = [];
// to save memory, use prototype
// create a base 
const projectProto = { 
 
};
// using a factory function because multiple objects are needed to be created.

// hard code the names and marks for now
// use the input value as names
const Players = (_name,_mark) => {
    
  return Object.create(projectProto, {
    name: {
      value: _name
    },
    mark: {
      value: _mark
    },
   
  })
};
let player1 = Players("player1","O");
let player2 = Players("player2", "X");
//using an IIFE module because gameBoard is only needed once
//I want to utilize the methods inside of it and use it's privacy
const GameBoard = (function () {
  const startBtn = document.querySelector(".start-btn");
  const restartBtn = document.querySelector(".restart-btn");
  const allCont = document.querySelector(".all-cont");
  const boxCont = document.querySelector(".item-cont");
  const winnerText = document.createElement("p");
  const createBox = ()=> {
    for (let i=0; i < 9; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "item");
        box.setAttribute("id", `--${i}`)
        boxArray.push(box);
        boxCont.appendChild(box);       
    } 
  };
  const delBoxes = () => {
    boxArray.forEach((item)=> {
      boxCont.removeChild(item);
    })
  };
  // put the logic in this function
  const sayWinner = () => {
  // problem: says winner add the end of the game even when there is no winner
    switch (true) {
      case boxArray[0].textContent === player1.mark &&
      boxArray[1].textContent === player1.mark  &&
      boxArray[2].textContent === player1.mark:
      case boxArray[3].textContent === player1.mark &&
      boxArray[4].textContent === player1.mark &&
      boxArray[5].textContent === player1.mark:
      case boxArray[6].textContent === player1.mark &&
      boxArray[7].textContent === player1.mark &&
      boxArray[8].textContent === player1.mark:
      case boxArray[0].textContent === player1.mark&&
      boxArray[3].textContent === player1.mark&&
      boxArray[6].textContent === player1.mark:
      case boxArray[1].textContent === player1.mark&&
      boxArray[4].textContent === player1.mark&&
      boxArray[7].textContent === player1.mark:
      case boxArray[2].textContent === player1.mark&&
      boxArray[5].textContent === player1.mark&&
      boxArray[8].textContent === player1.mark:
      case boxArray[0].textContent === player1.mark&&
      boxArray[4].textContent === player1.mark&&
      boxArray[8].textContent === player1.mark:
      case boxArray[2].textContent === player1.mark&&
      boxArray[4].textContent === player1.mark&&
      boxArray[6].textContent === player1.mark:
        var result = `${player1.name} is the winner!`;
        winnerText.setAttribute("class", "winner-txt");
        allCont.appendChild(winnerText);
        winnerText.textContent = result;
        delBoxes();
        break;
      case boxArray[0].textContent === player2.mark &&
      boxArray[1].textContent === player2.mark  &&
      boxArray[2].textContent === player2.mark:
      case boxArray[3].textContent === player2.mark &&
      boxArray[4].textContent === player2.mark &&
      boxArray[5].textContent === player2.mark:
      case boxArray[6].textContent === player2.mark &&
      boxArray[7].textContent === player2.mark &&
      boxArray[8].textContent === player2.mark:
      case boxArray[0].textContent === player2.mark&&
      boxArray[3].textContent === player2.mark&&
      boxArray[6].textContent === player2.mark:
      case boxArray[1].textContent === player2.mark&&
      boxArray[4].textContent === player2.mark&&
      boxArray[7].textContent === player2.mark:
      case boxArray[2].textContent === player2.mark&&
      boxArray[5].textContent === player2.mark&&
      boxArray[8].textContent === player2.mark:
      case boxArray[0].textContent === player2.mark&&
      boxArray[4].textContent === player2.mark&&
      boxArray[8].textContent === player2.mark:
      case boxArray[2].textContent === player2.mark&&
      boxArray[4].textContent === player2.mark&&
      boxArray[6].textContent === player2.mark:
      var result = `${player2.name} is the winner!`;
      winnerText.setAttribute("class", "winner-txt");
      allCont.appendChild(winnerText);
      winnerText.textContent = result;
      delBoxes();
        break
    }
    return {result};
  };
  const restartGame = () => {
    restartBtn.addEventListener("click", ()=> {
      restartBtn.style.backgroundColor = "black"
    });
    restartBtn.addEventListener("click", runGameAgain);
  };
  const runGameAgain = () => {
    // clear gameBoard because sayTied() is using it to function
    // clear box item's content so the player can mark the boxes again
    gameBoard.splice(0);
    boxArray.forEach((item)=> item.textContent = "");
    // if gameBoard's length is zero, it means the restart btn was clicked
    if (gameBoard.length === 0) {
      allCont.removeChild(winnerText);
      boxArray.forEach((item)=> {
        boxCont.appendChild(item); 
      });
     };
  };
  const startGame = ()=> {
    startBtn.addEventListener("click", ()=> {
      startBtn.style.backgroundColor = "black"
    })
    startBtn.addEventListener("click", runGame);
    
  };
  const runGame = () => {
    for (let i = 0; i < boxArray.length; i++) {
      const item = document.getElementById(`--${i}`);
      item.style.borderColor = "rgb(252, 166, 181)";
    };
    boxArray.forEach(item=>{
      item.addEventListener("click", game);
      
    });
  };
  const sayTied = ()=>{
    // works
    if (gameBoard.length == 9 && sayWinner.result === undefined ) {
      winnerText.setAttribute("class", "winner-txt");
      allCont.appendChild(winnerText);
      winnerText.textContent = "Tied";
      delBoxes();
    }; 
    
  };
  // create a function that updated current player
  const deterCurrent = () => {
    const player1Btn = document.querySelector(".player1-btn");
    const player2Btn = document.querySelector(".player2-btn"); 
    player1Btn.addEventListener("click", ()=> {
      return currentPlayer=player1;
    });
    player1Btn.addEventListener("click", ()=>{
      player1Btn.style.color = "rgb(252, 166, 181)";
      player1Btn.style.backgroundColor = "black";
    });
    
    player2Btn.addEventListener("click", ()=> {
      return currentPlayer=player2;
    });
    player2Btn.addEventListener("click", ()=>{
      player2Btn.style.color = "rgb(46, 46, 241)";
      player2Btn.style.backgroundColor = "black";
    })
  };
  
  return {
    sayWinner,
    createBox, 
    startGame,
    restartGame,
    sayTied,
    deterCurrent,
  };
}());
GameBoard.createBox();
GameBoard.startGame();
GameBoard.restartGame();
// use currentPlayer = player1 to make turns for your players
// use gameBoard to add marks and then use it in sayTied()
let currentPlayer = player1;
GameBoard.deterCurrent();
function game (e) {
  if (currentPlayer == player1) {
    if (e.target.textContent == "") {
      gameBoard.push(player1.mark);
      currentPlayer = player2;
      e.target.textContent = player1.mark;
     
    } else if (e.target.textContent != "") {
      currentPlayer = player1;
    };
  } else if (currentPlayer == player2) {
    // bug: solved => player will not be able to click on the full spots, but their turn will be
    // used if they click on them anyways.
    if (e.target.textContent == "") {
      gameBoard.push(player2.mark);
      currentPlayer = player1;
      e.target.textContent = player2.mark;
    
    } else if (e.target.textContent != "") {
      currentPlayer = player2;
    };
  };
  
  console.log(GameBoard.sayWinner());
  console.log(GameBoard.sayTied());
};

