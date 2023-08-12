// avoid repetition 
// use as little public functions and variables as you can
// try ti save memory and enhance performance
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
  var box;
  const boxCont = document.querySelector(".item-cont");
  const createBox = ()=> {

    for (let i=0; i < 9; i++) {
        box = document.createElement("div");
        box.setAttribute("class", `item ${i}`);
        boxArray.push(box);
        boxCont.appendChild(box);       
    } 
  }
  // put the logic in this function
  const sayWinner = () => {
    console.log(boxArray[1].innerText)
  }
  return {
    sayWinner,
    createBox, 
  };
}());
GameBoard.createBox();

// use currentPlayer = player1 to make turns for your players
let currentPlayer = player1;
function runGame() {
  boxArray.forEach(item=>{
    item.addEventListener("click", game)
  })
}
runGame();
function game (e) {
  if (currentPlayer == player1) {
    currentPlayer = player2;
    if (e.target.textContent == "") {
      e.target.textContent = player1.mark;
      GameBoard.sayWinner();
    };
    
  } else if (currentPlayer == player2) {
    currentPlayer = player1;
    if (e.target.textContent == "") {
      e.target.textContent = player2.mark;
      GameBoard.sayWinner();
    };
  };
};

