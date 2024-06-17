let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true//player1, player2

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("click");
        if(turn0) { 
            // player1
            box.innerText = "X";
            turn0 = false;
        } else {
            // player2
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

        checkDraw();
    });
});


let count = 0;
const checkDraw = () => {
    count++;
    if(count === 9){
        msg.innerText = `It's a Draw!`;
        msgCont.classList.remove("hide");
        diableBoxes();
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    diableBoxes();
}


const diableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgCont.classList.add("hide");
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);