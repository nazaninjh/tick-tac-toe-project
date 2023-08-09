//using an IIFE module because gameBoard is only needed once.
const GameBoard = (function () {
  const gameBoard = ["X", "O"];
  var box;
  const boxArray = [];
  const boxCont = document.querySelector(".item-cont");
  const createBox = ()=> {
    
    for (let i=0; i < 9; i++) {
        box = document.createElement("div");
        box.setAttribute("class", `item ${i}`);
        boxCont.appendChild(box);
        // use an array to store the boxes
        boxArray.push(box);
        // because box variable is always getting updated till item 8
           
    }
    
    
  }
   
  const catchClick = ()=> {
    boxArray.forEach((item)=> item.addEventListener("click", getUserPosition));
    function getUserPosition() {
      if (this.textContent == "") {
        this.textContent = "X";
      };
      giveRandNum();
      
    }
  }
  const giveRandNum = ()=> {
    let answer =  Math.floor(Math.random() * 9);
    console.log(answer)
    getComputerPosition();
    function getComputerPosition() {
      boxArray.forEach((item) => {
        // problem: can not replace an already taken box.
        if (item.textContent != "") {
          console.log('full');
          
        } else if (boxArray.indexOf(item) === answer && item.textContent ===  "") {
          boxArray[answer].textContent = "O"; 
        }  ;
      });
      return;
    };
  };
  
  
  return {
    giveRandNum,
    createBox,
    catchClick
  };
}());
GameBoard.createBox();
console.log(GameBoard.giveRandNum());
GameBoard.catchClick();

// to save memory, use prototype
// create a base 
const projectProto = () => {
  
};
// using a factory function because multiple objects are needed to be created.

const Players = (name, mark) => {
    
    return {
      name,
      mark,
    }
};
// make the mark for computer O, until later.
const player1 = Players("computer", "O");
const player2 = Players("user", "X");
console.log(player1, player2)
// control the flow of the game.

const displayController = () => {

};