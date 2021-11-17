const container = document.querySelector('.grid-container');

generateGrid();

function freshStart(){
  container.innerHTML = '';
  getNewGrid();
}

// Ask user for grid size
function getNewGrid(){
  let input = prompt("Choose a size, up to 100.");
  while (isNaN(input) || (input == '') || (input < 1) || (input > 100)) {
    input = prompt("Type a number up to 100, c'mon...");
  };
  generateGrid(input);
}

// Create 16 x 16 grid
function generateGrid(size = 16){

  for (i = 0; i < size; i++){
    const row = document.createElement('div');
    row.className = 'row';
    for (c = 0; c < size; c++){
      const cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
  createListeners();
}

function createListeners(){
  const boxes = document.querySelectorAll('.cell'); 
  boxes.forEach(function(box){
    box.addEventListener('mouseover', function(){
      box.style.backgroundColor = '#3BF5E2';
    })
  })
}

const reset = document.getElementById('reset-button');
reset.addEventListener('click', freshStart)
