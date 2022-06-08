const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
let gridSize = DEFAULT_SIZE;
let color = DEFAULT_COLOR;

const sliderValue = document.getElementById('size-slider');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
const multi = document.getElementById('multi');

sliderValue.onchange = (e) => createGrid(e.target.value);
black.onclick = () => color = 'black';
eraser.onclick = () => color = 'eraser';
multi.onclick = () => color = 'multi';

function createGrid(gridSize) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement('div')
        square.classList.add('grid-element')
        square.addEventListener('mouseover', main)
        grid.appendChild(square)
    }
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    const sliderText = document.getElementById('slide-text');
    sliderText.textContent = (`${gridSize} x ${gridSize}`)
}

createGrid(gridSize);

function main(e) {
    if (color == 'black') {
        e.target.style.backgroundColor = 'black';
    }
    if (color == 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
    if (color == 'multi') {
        e.target.style.backgroundColor = 'red';
    }
}

