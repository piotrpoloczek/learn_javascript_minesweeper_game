// Display/UI

import { createBoard } from './modules/minesweeper.js';

const BOARD_SIZE = 5
const NUMBER_OF_MINES = 2

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector('.board')
boardElement.style.setProperty("--size", BOARD_SIZE)
console.log(board)
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})

// 1. Populate a board with tiles/mines
// 2. Left click on tiles
    // a. Reveal tiles
// 3. Right click on tiles
    // a. Mark tiles
// 4. Check for win/lose