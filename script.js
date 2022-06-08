const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
let gridSize = DEFAULT_SIZE;
let color = DEFAULT_COLOR;

const sliderValue = document.getElementById('size-slider');
const eraser = document.getElementById('eraser');

sliderValue.onchange = (e) => createGrid(e.target.value);
eraser.onclick = () => color = 'white';

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
    e.target.style.backgroundColor = color;


    // let r = Math.floor(Math.random()*(255 +1));
    // let g = Math.floor(Math.random()*(255 +1));
    // let b = Math.floor(Math.random()*(255 +1));
    // e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

