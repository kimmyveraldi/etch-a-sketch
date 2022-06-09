const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
let gridSize = DEFAULT_SIZE;
let color = DEFAULT_COLOR;

const grid = document.getElementById('grid');
const sliderValue = document.getElementById('size-slider');
const colorSelector = document.getElementById('color-selector');
const eraser = document.getElementById('eraser');
const multi = document.getElementById('multi');
const reset = document.getElementById('clear');

sliderValue.onchange = (e) => createGrid(e.target.value);
colorSelector.onchange = (e) => color = e.target.value;
eraser.onclick = () => color = 'eraser';
multi.onclick = () => color = 'multi';
reset.onclick = () => clear();

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

function clear() {
    color=DEFAULT_COLOR;
    colorSelector.value = 'black'
    createGrid(gridSize);
}

function main(e) {
    if (color == 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
    if (color == 'multi') {
        r = Math.floor(Math.random()*(255 +1));
        g = Math.floor(Math.random()*(255 +1));
        b = Math.floor(Math.random()*(255 +1));
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    else {
        e.target.style.backgroundColor = color;
    }
}

createGrid(gridSize);


