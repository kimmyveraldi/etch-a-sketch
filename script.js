const grid = document. querySelector('#grid');
const controls = document.querySelector('#controls');


function createGrid() {
    grid.style.gridTemplateColumns = `repeat(16, 1fr)`
    grid.style.gridTemplateRows = `repeat(16, 1fr)`
  
    for (let i = 0; i < 256; i++) {
      const square = document.createElement('div')
      square.classList.add('grid-element')
      grid.appendChild(square)
    }
  }

  createGrid()
