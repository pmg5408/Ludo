# Ludo Web Game

## Overview

This project is a web-based implementation of the classic board game Ludo. The game allows 2 to 4 players to play Ludo with the familiar rules of rolling dice, moving tokens, and reaching the finish line.

## Features

- **Player Count:** Supports 2 to 4 players.
- **Token Movement:** Tokens move according to dice rolls and follow the game rules.
- **Blocking and Elimination:** Tokens can block other tokens, and tokens can be sent back to the start if landed upon.
- **Win Detection:** The game detects when a player has won and announces the winner.
- **Three Consecutive Sixes Rule:** Rolling three consecutive sixes results in forfeiting the turn.
- **Dynamic Dice Roll:** Generates random dice numbers and updates the game state accordingly.

## Demo

![Demo GIF 1](path/to/demo1.gif)
![Demo GIF 2](path/to/demo2.gif)

## Tech Stack

- **HTML:** Structure of the game board and UI elements.
- **CSS:** Styles the game board and tokens.
- **JavaScript:** Game logic and interactivity.

## Code Structure

### Token Movement

The `tokenMovement` function handles the logic for moving tokens based on the current player's dice roll. It checks for valid moves, updates the token's position, handles blocking and elimination, and detects when a token reaches the finish line.

### Token Initialization

Tokens are created and assigned to their starting positions based on the number of players. Each token is assigned properties such as color, starting square, and unique ID.

### Enabling and Disabling Token Clicks

The functions `disableTokenClickListeners` and `enableTokenClickListeners` manage when tokens can be clicked to ensure proper game flow and prevent invalid moves.

### Dice Roll Generation

The `diceNumGenerator` function generates random dice rolls, updates the UI, and determines the player's next action based on the roll. It handles special rules like three consecutive sixes.

## How to Run

1. **HTML File:** Contains the structure of the game board and UI elements.
2. **CSS File:** Styles the game board and tokens.
3. **JavaScript File:** Contains the game logic described above.

To run the game, open the HTML file in a web browser. The game board will be displayed, and players can start playing by clicking on the dice to roll and selecting tokens to move.

## Game Rules

1. **Starting the Game:** Players need to roll a six to move a token from the start area to the first square.
2. **Token Movement:** Players roll the dice and move their tokens according to the rolled number.
3. **Blocking:** Tokens can block other tokens if they land on the same square.
4. **Elimination:** Tokens can send other tokens back to the start if they land on the same square, provided the square is not a safe square.
5. **Winning:** The first player to move all their tokens to the finish line wins. The game announces the winner and their order.

Please refer to the following website for more information regarding the rules: [Ludo Rules](https://www.ymimports.com/pages/how-to-play-ludo)

### Enjoy playing Ludo!

