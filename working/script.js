// Display/UI

import { createBoard, markTile } from './minesweeper.js';

const BOARD_SIZE = 5
const NUMBER_OF_MINES = 2

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector('.board')
const minesLeftText = document.querySelector('[data-mine-count]')

console.log(board)

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener('click', () => {})
        tile.element.addEventListener('contextmenu', e => {
            e.preventDefault()
            markTile(tile)
        })
    })
})

boardElement.getElementsByClassName.setProperty("--size", BOARD_SIZE)
minesLeftText = NUMBER_OF_MINES

// 2. Left click on tiles
    // a. Reveal tiles
// 3. Right click on tiles
    // a. Mark tiles
// 4. Check for win/lose