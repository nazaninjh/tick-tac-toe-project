// avoid repetition 
// use as little public functions and variables as you can
// try to save memory and enhance performance
var flag;
const boxArray = [];
// to save memory, use prototype
// create a base 
const projectProto = { 
  
};
// using a factory function because multiple objects are needed to be created.
const Players = (name, mark) => {
    return Object.create(projectProto, {
      name: {
        value:name
      }, 
      mark: {
        value: mark
      }, 
      
    })
};
// hard code the names and marks for now
const player1 = Players("playerOne", "O");
const player2 = Players("playerTwo", "X");
//using an IIFE module because gameBoard is only needed once
//I want to utilize the methods inside of it and use it's privacy
const GameBoard = (function () {
  const boxCont = document.querySelector(".item-cont");
  const createBox = ()=> {
    for (let i=0; i < 9; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "item");
        box.setAttribute("id", `--${i}`)
        boxArray.push(box);
        boxCont.appendChild(box);       
    } 
  }
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
        var result = `${player1.name} is the winner`;
        console.log(result);
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
      var result = `${player2.name} is the winner`;
        console.log(result);
       
      
    }
    return {
      result,
    }
    
   
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
  const startGame = ()=> {
    const startBtn = document.querySelector(".start-btn");
    startBtn.addEventListener("click", runGame);
  };
  
  const sayTied = ()=>{
    // add tied feature: if all of the boxes are full but to one is the winner
    // this does not work
    if (sayWinner.result === undefined) {
      return "tied";
    }
    
  }
  return {
    sayWinner,
    createBox, 
    startGame,
    
  };
}());
GameBoard.createBox();
GameBoard.startGame();

// use currentPlayer = player1 to make turns for your players
let currentPlayer = player1;


function game (e) {
  if (currentPlayer == player1) {
    if (e.target.textContent == "") {
      currentPlayer = player2;
      e.target.textContent = player1.mark;
    } else if (e.target.textContent != "") {
      currentPlayer = player1;
    };
  } else if (currentPlayer == player2) {
    // bug: solved => player will not be able to click on the full spots, but their turn will be
    // used if they click on them anyways.
    if (e.target.textContent == "") {
      currentPlayer = player1;
      e.target.textContent = player2.mark;
    } else if (e.target.textContent != "") {
      currentPlayer = player2;
    };
  };
  console.log(GameBoard.sayWinner());
};
