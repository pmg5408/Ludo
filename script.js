//Array initialization for 225 squares on the board
const cellArray = []
for (let i = 0; i < 225; i++) {
    cellArray[i] = "";
  }

//Array initialization for tokens on the board
let tokenArray = []
for (let i = 0; i < 16; i++) {
    tokenArray[i] = "";
  }

//getting player names  
const storedArray = localStorage.getItem('playerNames')
const playerNames = JSON.parse(storedArray)


//code to decide which player goes first
let playerKnocked = 0
const np = parseInt(localStorage.getItem('numPlayers'));
const dice = document.getElementById("dice");
const diceNum = document.getElementById("diceNumber");
const turn = document.getElementById("turn")
let rolls = [];
let currentPlayer = 1; // Start with player 1
let highestRoll = 0
let highestPlayer = 1
let highestPlayers = []
let firstRoll = 0
let multipleHighestPlayers = 0

function decide1stPlayer(){
    // Getting the die roll value for the player, storing in array and displaying
    const rn = Math.floor(Math.random() * 6) + 1;
    rolls[currentPlayer - 1] = rn;
    diceNum.innerHTML = `Player ${currentPlayer}: ${rn}`
    

    if(rn === highestRoll){
        multipleHighestPlayers = 1
    }
    // If die value is higher than prev highest, making necessary changes. 
    if(rn > highestRoll){
        multipleHighestPlayers = 0    //Changing value to reflect that only a single player holds the highest value currently
        highestRoll = rn
        highestPlayer = currentPlayer
        turn.innerHTML = ` Player with highest yet: ${playerNames[highestPlayer-1]}`
    }
    currentPlayer++
    console.log(currentPlayer, " ", np+1)
    //Logic for when al the players have rolled the dice once in the first round and now it's time to decide the player that will start the game.
    if(currentPlayer === np+1){

        if (multipleHighestPlayers === 0){
            currentPlayer = highestPlayer
            turn.innerHTML = `Highest Player = ${highestPlayer}. Player ${highestPlayer} ${playerNames[highestPlayer-1]} roll the dice to start`
        }
        //If multiple players with highest roll, we will put all the players in an array and then ranodmly select a player to start
        else{
            for(let i = 0; i < np; i++){
                if(highestRoll === rolls[i]){
                    highestPlayers.push(i+1)
                }
            }
            const randomIndex = Math.floor(Math.random() * arr.length);
            turn.innerHTML = `Highest Player = ${highestPlayers[randomIndex]}. Player ${highestPlayers[randomIndex]} ${playerNames[highestPlayers[randomIndex]-1]} roll the dice to start. There were multiple players with the highest roll and the player to start was chosen randomly from the list of those players`            
        }

        //Making sure the diceNumGenerator function is called now instead of decide!stPlayer, when the dice is pressed from hereon. 
        dice.removeEventListener("click", decide1stPlayer)
        dice.addEventListener("click", diceNumGenerator)
        firstRoll = 1
        boardInfo = document.querySelector('#PlayersOnGameboard');
        boardInfo.removeChild(boardInfo.lastChild);    
    }
}

dice.addEventListener("click", decide1stPlayer)

//creating arrays for different functionalitites with the gameboard squares
const blueColor = [122, 0, 1, 2, 3, 4, 5, 15, 30, 45, 60, 75, 76, 77, 78, 79, 80, 32, 33, 47, 48, 20, 35, 50, 65, 91, 106, 107, 108, 109, 110]
const redColor = [188, 135, 150, 165, 180, 195, 210, 211, 212, 213, 214, 215, 200, 185, 170, 155, 140, 139, 138, 137, 136, 167, 168, 182, 183, 201, 202, 187, 172, 157, 142]
const yellowColor = [36, 9, 10, 11, 12, 13, 14, 24, 39, 54, 69, 84, 29, 44, 59, 74, 89, 88, 87, 86, 85, 41, 42, 56, 57, 23, 22, 37, 52, 67, 82]
const greenColor = [102, 144, 145, 146, 147, 148, 149, 159, 174, 189, 204, 219, 220, 221, 222, 223, 224, 164, 179, 194, 209, 176, 177, 191, 192, 133, 118, 117, 116, 115, 114]
const endSquares = [96, 97, 98, 111, 112, 113, 126, 127, 128]
const forbiddenSquares = [1, 2, 3, 4, 5, 0, 15, 30, 45, 60, 75, 76, 77, 78, 79, 80, 65, 50, 35, 20, 9, 10, 11, 12, 13, 14, 24, 39, 54, 69, 84, 85, 86, 87, 88, 89, 74, 59, 44, 29, 14,
                            144, 145, 146, 147, 148, 149, 159, 174, 189, 204, 219, 220, 221, 222, 223, 224, 209, 194, 179, 164, 149, 135, 136, 137, 138, 139, 140, 155, 170, 185, 200,
                             215, 214, 213, 212, 211, 210, 195, 180, 165, 150, 135, 126, 128, 112, 96, 98]
const startSquares = [32, 33, 47, 48, 167, 168, 182, 183, 41, 42, 56, 57, 176, 177, 191, 192]
const moveUp = [81, 66, 51, 36, 21, 120, 105, 216, 201, 186, 171, 156]
const moveDown = [8, 23, 38, 53, 68, 104, 119, 143, 158, 173, 188, 203]
const moveLeft = [125, 124, 123, 122, 121, 134, 133, 132, 131, 130, 218, 217]
const moveRight = [6, 7, 99, 100, 101, 102, 103, 90, 91, 92, 93, 94]
const moveAcross = [129, 141, 95, 83]
const greenEnd = [119, 118, 117, 116, 115, 114]
const yellowEnd = [7, 22, 37, 52, 67, 82]
const blueEnd = [105, 106, 107, 108, 109, 110]
const redEnd = [217, 202, 187, 172, 157, 142]
const ends = [118, 117, 116, 115, 114, 22, 37, 52, 67, 82, 106, 107, 108, 109, 110, 202, 187, 172, 157, 142]
const safeSquares = [36, 122, 102, 188, 133, 91, 23, 201]
let tokensAtStart = [4, 4, 4, 4]
let tokensFinished = [0, 0, 0, 0]
let playersWon = []
const colors = ['Blue', 'Yellow', 'Green', 'Red']


const gameBoard = document.querySelector("#gameboard");

//creating gmeboard
function createBoard(){
    cellArray.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.dataset.block = "0"
        //cellElement.innerHTML = cellElement.id

        gameBoard.append(cellElement);

        for (blue in blueColor){
            if(cellElement.id === blueColor[blue].toString()){
                cellElement.style.backgroundColor = "#0000FF";
            }

            if((cellElement.id === '32') || (cellElement.id === '33') || (cellElement.id === '47') || (cellElement.id === '48')){
                cellElement.dataset.color = "blue"
            }
        }
        for (red in redColor){
            if(cellElement.id === redColor[red].toString()){
                cellElement.style.backgroundColor = "#FF0000";
            }
            if((cellElement.id === '167') || (cellElement.id === '168') || (cellElement.id === '182') || (cellElement.id === '183')){
                cellElement.dataset.color = "red"
            }
        }
        for (green in greenColor){
            if(cellElement.id === greenColor[green].toString()){
                cellElement.style.backgroundColor = "#008000";
            }
            if((cellElement.id === '176') || (cellElement.id === '177') || (cellElement.id === '191') || (cellElement.id === '192')){
                cellElement.dataset.color = "green"
            }
        }
        for (yellow in yellowColor){
            if(cellElement.id === yellowColor[yellow].toString()){
                cellElement.style.backgroundColor = "#FFFF00";
            }
            if((cellElement.id === '42') || (cellElement.id === '41') || (cellElement.id === '57') || (cellElement.id === '56')){
                cellElement.dataset.color = "yellow"
            }
        }

        for (end in endSquares){
            if(cellElement.id === endSquares[end].toString()){
                cellElement.style.border = 'none';
            }
        }

    })

    //Displaying names and colors of players
    playerOnGameboard = document.querySelector("#PlayersOnGameboard")

    for(let i = 0; i < np; i++){
        const name = document.createElement("p");
        name.innerHTML = `Player ${i+1} is ${playerNames[i]} and Color is ${colors[i]}`;
        playerOnGameboard.appendChild(name);
    }
    const info = document.createElement("p");
    info.innerHTML = `This is the 1st round. The die values in this round will be used to decide the player to go 1st`
    playerOnGameboard.appendChild(info)
}
createBoard();

//function to define token movement 
function tokenMovement(event){
    //variable initializations
    tokenPressed = event.target
    sqOld = event.target.parentElement
    startSqOld = sqOld
    blockFlag = 0
    let sqNew
    idInt = parseInt(sqOld.id)
    tokenColor = tokenPressed.dataset.color
    let otherBlockToken
    
    //if statement to make sure token movement happens only when the player clicks on their own token
    if((dummyPlayer === 1 && tokenColor === "blue") || (dummyPlayer === 2 && tokenColor === "yellow") || (dummyPlayer === 3 && tokenColor === "green") || (dummyPlayer === 4 && tokenColor === "red")){

        //moving a new token to the starting square when a player lands a 6
        if(startSquares.includes(parseInt(sqOld.id)) && randomNumber === 6){
            if(dummyPlayer === 1){
                sqNew = document.getElementById('91')
                tokensAtStart[0] = tokensAtStart[0] - 1
                dice.addEventListener("click", diceNumGenerator)
            }
            else if(dummyPlayer === 2){
                sqNew = document.getElementById('23')
                tokensAtStart[1] = tokensAtStart[1] - 1
                dice.addEventListener("click", diceNumGenerator)
            }
            else if(dummyPlayer === 3){
                sqNew = document.getElementById('133')
                tokensAtStart[2] = tokensAtStart[2] - 1
                dice.addEventListener("click", diceNumGenerator)
            }
            else if(dummyPlayer === 4){
                sqNew = document.getElementById('201')
                tokensAtStart[3] = tokensAtStart[3] - 1
                dice.addEventListener("click", diceNumGenerator)
            }
            sqOld.removeChild(tokenPressed)
            sqNew.append(tokenPressed)
            disableTokenClickListeners();
        }
        
        //moving the token when it is already in play
        else{

            //figuring out if a player has decided to move a block or a single token
            if(parseInt(sqOld.dataset.block) === 1){
                if(randomNumber%2 !== 0){
                    turn.innerHTML += "you need an even number, move another token or you lose your turn"
                    dice.addEventListener("click", diceNumGenerator)
                    return
                }
                else{
                    randomNumber = randomNumber/2
                    blockFlag = 1
                }
                if(sqOld.children[0] === tokenPressed){
                    otherBlockToken = sqOld.children[1]
                }
                else{
                    otherBlockToken = sqOld.children[0] 
                }
            }
            i = randomNumber

            //moving the token one square at a time using the while loop
            while(i > 0 && (moveLeft.includes(idInt) || moveDown.includes(idInt) || moveUp.includes(idInt) || moveRight.includes(idInt) || moveAcross.includes(idInt) || ends.includes(idInt))){

                //Moving the token in the endzone and keeping a track of when a token reaches the finish. It includes code for moving a block too
                if((greenEnd.includes(idInt) && tokenColor === "green") || (redEnd.includes(idInt) && tokenColor === "red") || (blueEnd.includes(idInt) && tokenColor === "blue") || (yellowEnd.includes(idInt) && tokenColor === "yellow")){
                    if(tokenPressed.dataset.color === "green" && idInt - randomNumber >= 113){
                        sqNew = document.getElementById(idInt - i)
                        sqOld.removeChild(tokenPressed)
                        sqNew.append(tokenPressed)
                        if(blockFlag == 1){
                            sqOld.removeChild(otherBlockToken)
                            sqNew.append(otherBlockToken)
                        }
                        if(parseInt(sqNew.id) === 113){
                            if(blockFlag === 1){
                                tokensFinished[2] += 2 
                            }
                            else{
                                tokensFinished[2] += 1
                            }
                            if(tokensFinished === 4){
                                if(randomNumber === 6){
                                    currentPlayer = (j%np)+1 
                                    j++
                                }
                                playersWon.push(3)
                            }
                            
                        }
                        else{
                            sqOld = sqNew
                        }
                        disableTokenClickListeners()
                    }
                    else if(tokenPressed.dataset.color === "red" && idInt - 15*randomNumber >= 127){
                        sqNew = document.getElementById(idInt - 15*i)
                        sqOld.removeChild(tokenPressed)
                        sqNew.append(tokenPressed)
                        if(blockFlag == 1){
                            sqOld.removeChild(otherBlockToken)
                            sqNew.append(otherBlockToken)
                        }
                        if(parseInt(sqNew.id) === 127){
                            if(blockFlag === 1){
                                tokensFinished[3] += 2 
                            }
                            else{
                                tokensFinished[3] += 1
                            }
                            if(tokensFinished === 4){
                                if(randomNumber === 6){
                                    currentPlayer = (j%np)+1
                                    j++
                                }
                                playersWon.push(4)
                            }
                        }
                        else{sqOld = sqNew}

                        disableTokenClickListeners()
                    }
                    else if(tokenPressed.dataset.color === "blue" && idInt + randomNumber <= 111){
                        sqNew = document.getElementById(idInt + i)
                        sqOld.removeChild(tokenPressed)
                        sqNew.append(tokenPressed)
                        if(blockFlag == 1){
                            sqOld.removeChild(otherBlockToken)
                            sqNew.append(otherBlockToken)
                        }
                        if(parseInt(sqNew.id) === 111){
                            if(blockFlag === 1){
                                tokensFinished[0] += 2 
                            }
                            else{
                                tokensFinished[0] += 1
                            }
                            if(tokensFinished === 4){
                                if(randomNumber === 6){
                                    currentPlayer = (j%np)+1
                                    j++
                                }
                                playersWon.push(1)
                            }
                        }
                        else{sqOld = sqNew}
                        disableTokenClickListeners()
                    }
                    else if(tokenPressed.dataset.color === "yellow" && idInt + 15*randomNumber <= 97){
                        sqNew = document.getElementById(idInt + 15*i)
                        sqOld.removeChild(tokenPressed)
                        sqNew.append(tokenPressed)
                        if(blockFlag == 1){
                            sqOld.removeChild(otherBlockToken)
                            sqNew.append(otherBlockToken)
                        }
                        if(parseInt(sqNew.id) === 97){
                            if(blockFlag === 1){
                                tokensFinished[1] += 2 
                            }
                            else{
                                tokensFinished[1] += 1
                            }
                            if(tokensFinished === 4){
                                if(randomNumber === 6){
                                    currentPlayer = (j%np)+1
                                    j++
                                }
                                playersWon.push(2)
                            }
                        }
                        else{sqOld = sqNew}
                        disableTokenClickListeners()
                    }
                    dice.addEventListener("click", diceNumGenerator)
                    break
                }

                //Defining normal movements for a token and a block 
                else{
                    if(moveLeft.includes(idInt)){
                        sqNew = document.getElementById(idInt - 1)
                    }
                    else if(moveDown.includes(idInt)){
                        sqNew = document.getElementById(idInt + 15)
                    }
                    else if(moveUp.includes(idInt)){
                        sqNew = document.getElementById(idInt - 15)
                    }
                    else if(moveRight.includes(idInt)){
                        sqNew = document.getElementById(idInt + 1)
                    }
                    else if(idInt === 129){
                        sqNew = document.getElementById('143')
                    }
                    else if(idInt === 141){
                        sqNew = document.getElementById('125')
                    }
                    else if(idInt === 95){
                        sqNew = document.getElementById('81')
                    }
                    else if(idInt === 83){
                        sqNew = document.getElementById('99')
                    }
                    if(sqNew.dataset.block == 1 && (sqNew.children[0].dataset.color != tokenColor)){
                        sqOld.removeChild(tokenPressed)
                        startSqOld.append(tokenPressed)
                        turn.innerHTML += " blocked by block move another token or next player plays"
                        dice.addEventListener("click", diceNumGenerator)
                        enableTokenClickListeners()
                        return
                    }
                    sqOld.removeChild(tokenPressed)
                    sqNew.append(tokenPressed)
                    if(blockFlag == 1){
                        sqOld.removeChild(otherBlockToken)
                        sqNew.append(otherBlockToken)
                        sqOld.dataset.block = 0
                        sqNew.dataset.block = 1
                    }
                    sqOld = document.getElementById(sqNew.id)
                    i = i - 1
                    idInt = parseInt(sqOld.id)
                    disableTokenClickListeners()

                }
                dice.addEventListener("click", diceNumGenerator)
            }
            //Checking when a token lands on a square already occupied by a token. Eliminating a token and forming a block
            if((sqNew.getElementsByTagName("div").length > 1) && (!safeSquares.includes(parseInt(sqNew.id)))){
                tokensInside = Array.from(sqNew.getElementsByTagName("div"))
                
                //Eliminating a token and sending it back to its base
                if (tokensInside[0].dataset.color !== tokensInside[1].dataset.color){
                    startSqForToken = document.getElementById(tokensInside[0].dataset.startSq)
                    sqNew.removeChild(tokensInside[0])
                    startSqForToken.append(tokensInside[0])
                    currentPlayer = dummyPlayer
                    j--
                    turn.innerHTML = "you knocked a player out. Player " + dummyPlayer + " gets another turn."
                    knocledColor = tokensInside[0].dataset.color
                    playerKnocked = 1
                    if(knocledColor === "blue"){
                        tokensAtStart[0] = tokensAtStart[0] + 1
                    }
                    else if(knocledColor === "yellow"){
                        tokensAtStart[1] = tokensAtStart[1] + 1
                    }
                    else if(knocledColor === "green"){
                        tokensAtStart[2] = tokensAtStart[2] + 1
                    }
                    else if(knocledColor === "red"){
                        tokensAtStart[3] = tokensAtStart[3] + 1
                    }
                }

                //Forming a block
                else if(sqNew.getElementsByTagName("div").length > 1 && (tokensInside[0].dataset.color === tokensInside[1].dataset.color))
                {   
                    tokensInside = Array.from(sqNew.getElementsByTagName("div"))
                    sqNew.dataset.block = "1"
                    sqNew.dataset.blockT1 = tokensInside[0].id
                    sqNew.dataset.blockT2 = tokensInside[1].id
                }
            }

        }  
    } 
    
    //Checking if all players have finished 
    if(playersWon.length === np-1){
        turn.innerHTML = `Game ended. ${playerNames[playersWon[0]]} won. 2.${playerNames[playersWon[1]]}`
        if(np === 3){
            turn.innerHTML += `3.${playerNames[playersWon[2]]}`
        }
        if( np=== 4){
            turn.innerHTML += `4.${playerNames[playersWon[3]]}`
        }
    }
    blockFlag = 0
}

//Forming the tokens, assigning them to the specific colored squares according to the number of players and assigning them properties
tokenArray.forEach((cell, index) => {
    token = document.createElement("div")
    token.classList.add("circle")
    sq = document.getElementById(startSquares[index].toString())
    if(np === 2){
        if(sq.dataset.color == "blue" || sq.dataset.color == "yellow"){
            token.style.backgroundColor = sq.style.backgroundColor
            token.dataset.color = sq.dataset.color
            token.dataset.startSq = sq.id
            token.id = sq.dataset.color + "-" + ((index%4)+1);
            token.onclick = tokenMovement
            sq.innerHTML = ''
            sq.append(token)
            tokenArray.push(token)
        }
    }
    else if(np === 3){
        if(sq.dataset.color == "blue" || sq.dataset.color == "yellow" || sq.dataset.color == "green"){
            token.style.backgroundColor = sq.style.backgroundColor
            token.dataset.color = sq.dataset.color
            token.dataset.startSq = sq.id
            token.id = sq.dataset.color + "-" + ((index%4)+1);
            token.onclick = tokenMovement
            sq.innerHTML = ''
            sq.append(token)
            tokenArray.push(token)
        }
    }
    else{
        token.style.backgroundColor = sq.style.backgroundColor
        token.dataset.color = sq.dataset.color
        token.dataset.startSq = sq.id
        token.id = sq.dataset.color + "-" + ((index%4)+1);
        token.onclick = tokenMovement
        sq.innerHTML = ''
        sq.append(token)
        tokenArray.push(token)
    }
})


//Enabling and disabling token clicks to restrict the player from moving the tokens inappropriately
function disableTokenClickListeners() {
    tokenArray.forEach((token) => {
        token.onclick = null;
    });
}

function enableTokenClickListeners() {
    tokenArray = tokenArray.filter(token => token !== "")
    tokenArray.forEach((token) => {
            token.onclick = tokenMovement;
    });
}


//Getting and displaying number on the die
let j = 1;
let sixCount = 0;
let dummyPlayer
let randomNumber
function diceNumGenerator(){
    if(firstRoll === 1){
        dummyPlayer = currentPlayer
        j = currentPlayer
    }
    firstRoll = 0
    randomNumber = Math.floor(Math.random() * 6) + 1; 
    diceNum.innerHTML = randomNumber;

    //If a number other than 6 is rolled
    if(randomNumber != 6){
        turn.innerHTML = `${playerNames[currentPlayer-1]} move ${randomNumber} spaces`
        //turn.innerHTML = "Player " + ((j%np)+1) + " is next. Player " + currentPlayer + " move " + randomNumber + " spaces." + " Current player: " + currentPlayer
        dummyPlayer = currentPlayer
        while(playersWon.includes(((j%np)+1))){
            j++
        }
        currentPlayer = ((j%np)+1);
        j = j + 1;
        sixCount = 0;
        enableTokenClickListeners()
    }

    //Three consecutive sixes are rolled
    else if(sixCount == 3){
        turn.innerHTML = `${playerNames[currentPlayer-1]} You had 3 sixes in a row. Next player plays`
        //turn.innerHTML = "Player " + ((j%np)+1) + " is next. Player " + currentPlayer + " had 3 sixes in a row so next player playes " 
        dummyPlayer = currentPlayer
        currentPlayer = ((j%np)+1);
        j = j + 1;
        sixCount = 0;
        enableTokenClickListeners()
    }

    //A six is rolled 
    else{
        if(tokensAtStart[currentPlayer-1] === 4){
            turn.innerHTML = `${playerNames[currentPlayer-1]} select a token to move it to the 1st square and roll the die again`
            //turn.innerHTML = "Player " + currentPlayer + " select a token to move it to the 1st square and roll the die again"
        }
        else if(tokensAtStart[currentPlayer-1] === 0){
            turn.innerHTML = `${playerNames[currentPlayer-1]} move 6 spaces and roll the die again`
            //turn.innerHTML = "Move 6 spaces and player " + currentPlayer + " gets another chance."
        }
        else{
            turn.innerHTML = `${playerNames[currentPlayer-1]} get a new token or move a token in play`
            //turn.innerHTML = "Player " + currentPlayer + " move a new token to the 1st square or choose another token to move it "
        }
        
        dummyPlayer = currentPlayer
        sixCount += 1
        enableTokenClickListeners()
    }
    if(((tokensAtStart[dummyPlayer-1]+tokensFinished[dummyPlayer-1]) !== 4) || randomNumber === 6){
        dice.removeEventListener("click", diceNumGenerator)
    }
}

/*window.setInterval(() => {
    const heading = document.querySelector("h1");
    heading.style.color  = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    if(heading.style.visibility == "hidden")
        heading.style.visibility = "visible";
    else
        heading.style.visibility = "hidden";
    
},500);*/


