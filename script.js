function chessDesk() {
  var desk = document.createElement('div'),
      letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      numbers = ['1', '2', '3', '4', '5', '6', '7', '8'],
      blockToCreate, i, j;
  document.body.appendChild(desk);
  desk.className = 'desk';

  blockToCreate = document.createElement('div');
  desk.appendChild(blockToCreate);
  blockToCreate.className = 'empty';

  for (i = 0; i < 8; i++) {
    blockToCreate = document.createElement('div');
    desk.appendChild(blockToCreate);
    blockToCreate.className = 'cell upSideDown';
    blockToCreate.innerText = letters[i];
  }

  blockToCreate = document.createElement('div');
  desk.appendChild(blockToCreate);
  blockToCreate.className = 'empty';

  for (i = 0; i < 8; i++) {
    blockToCreate = document.createElement('div');
    desk.appendChild(blockToCreate);
    blockToCreate.className = 'cell';
    blockToCreate.innerText = numbers[i];

    for (j = 0; j < 8; j++) {
      blockToCreate = document.createElement('div');
      desk.appendChild(blockToCreate);
      blockToCreate.className = (i + j) % 2 == 0 ? 'white' : 'black';
    }

    blockToCreate = document.createElement('div');
    desk.appendChild(blockToCreate);
    blockToCreate.className = 'cell upSideDown';
    blockToCreate.innerText = numbers[i];
  }

  blockToCreate = document.createElement('div');
  desk.appendChild(blockToCreate);
  blockToCreate.className = 'empty';

  for (i = 0; i < 8; i++) {
    blockToCreate = document.createElement('div');
    desk.appendChild(blockToCreate);
    blockToCreate.className = 'cell';
    blockToCreate.innerText = letters[i];
  }
}