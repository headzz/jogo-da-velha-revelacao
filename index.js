// // Initialize an empty board
// const board = [['', '', ''], ['', '', ''], ['', '', '']];

// // Array of all possible winning lines (rows, columns, diagonals)
// const winLines = [
//   [[0, 0], [0, 1], [0, 2]], // Row 1
//   [[1, 0], [1, 1], [1, 2]], // Row 2
//   [[2, 0], [2, 1], [2, 2]], // Row 3
//   [[0, 0], [1, 0], [2, 0]], // Column 1
//   [[0, 1], [1, 1], [2, 1]], // Column 2
//   [[0, 2], [1, 2], [2, 2]], // Column 3
//   [[0, 0], [1, 1], [2, 2]], // Diagonal 1
//   [[0, 2], [1, 1], [2, 0]]  // Diagonal 2
// ];

// // Function to check if a move would complete a win line
// function wouldCompleteWin(line, mark) {
//   return line.every(([row, col]) => board[row][col] === mark || board[row][col] === '');
// }

// // Function to check if there's a winning line on the board
// function checkWin() {
//   for (let line of winLines) {
//     const [a, b, c] = line;
//     if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
//       return true;
//     }
//   }
//   return false;
// }

// // Decision logic for each click, knowing the click position and move count
// function decisionForClick(row, col, moveCount) {
//   if (board[row][col] !== '') {
//     throw new Error('This position is already filled!');
//   }

//   // For the first 8 moves, fill positions but avoid completing a win
//   if (moveCount < 8) {
//     const mark = moveCount % 2 === 0 ? 'X' : 'O'; // Alternate between X and O
//     board[row][col] = mark;

//     // Check if this move completes a win, if so, revert it
//     if (checkWin()) {
//       board[row][col] = ''; // Revert the move
//       throw new Error('Cannot win before the last move!');
//     }
//     return mark;
//   } else {
//     // On the 9th move, ensure a winning line is completed
//     const mark = 'X'; // Choose a winner (X or O)
//     board[row][col] = mark;

//     // Ensure this is a winning move
//     if (!checkWin()) {
//       throw new Error('The last move must be a winning move!');
//     }
//     return mark;
//   }
// }

// // Example simulation with provided positions for clicks
// const clicks = [
//   [0, 0], [0, 1], [1, 1], [1, 0], [2, 2], [2, 0], [0, 2], [1, 2], [2, 1] // Last move will win
// ];

// let i = 0;

// const changeInnerHtml = (row, col, id) => {
//     const mark = decisionForClick(row, col, i);
//     const changeHtmlValue = document.getElementById(id)
//     changeHtmlValue.innerText = mark
//     i++

//     console.log(board, row, col)
// }

///////////////////O DE CIMA FUNCIONA MELHOR/////////////////////////////

// Initialize an empty board
const board = [['', '', ''], ['', '', ''], ['', '', '']];

// Array of all possible winning lines (rows, columns, diagonals)
const winLines = [
  [[0, 0], [0, 1], [0, 2]], // Row 1
  [[1, 0], [1, 1], [1, 2]], // Row 2
  [[2, 0], [2, 1], [2, 2]], // Row 3
  [[0, 0], [1, 0], [2, 0]], // Column 1
  [[0, 1], [1, 1], [2, 1]], // Column 2
  [[0, 2], [1, 2], [2, 2]], // Column 3
  [[0, 0], [1, 1], [2, 2]], // Diagonal 1
  [[0, 2], [1, 1], [2, 0]]  // Diagonal 2
];

// Function to check if the current board has a winning line
function checkWin() {
  for (let line of winLines) {
    const [a, b, c] = line;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      return true;
    }
  }
  return false;
}

// Function to check if placing a mark would result in a win
function wouldCompleteWin(row, col, mark) {
  // Temporarily place the mark to simulate the move
  board[row][col] = mark;
  const winDetected = checkWin();
  // Remove the temporary mark
  board[row][col] = '';
  return winDetected;
}

// Decision logic for each click, knowing the click position and move count
function decisionForClick(row, col, moveCount) {
  if (board[row][col] !== '') {
    return; // Do nothing if the position is already filled
  }

  // For the first 8 moves, place a mark but avoid completing a win
  if (moveCount < 8) {
    const mark = moveCount % 2 === 0 ? 'X' : 'O'; // Alternate between X and O
    
    // If placing the mark would complete a win, switch to the other mark
    if (wouldCompleteWin(row, col, mark)) {
      const alternateMark = mark === 'X' ? 'O' : 'X';
      board[row][col] = alternateMark;
      return alternateMark;
    } else {
      board[row][col] = mark;
      return mark;
    }
  } else {
    // On the 9th move, ensure that a winning move is made
    const mark = 'X'; // Choose a winner (X or O)
    board[row][col] = mark;
    return mark;
  }
}

// Example simulation with provided positions for clicks
const clicks = [
  [0, 0], [0, 1], [1, 1], [1, 0], [2, 2], [2, 0], [0, 2], [1, 2], [2, 1] // Last move will win
];

// // Simulate the game
// for (let i = 0; i < clicks.length; i++) {
//   const [row, col] = clicks[i];
//   const mark = decisionForClick(row, col, i);
//   console.log(`Move ${i + 1}: Placed '${mark}' at (${row}, ${col})`);
//   console.log(board);
// }


let i = 0;
const changeInnerHtml = (row, col, id) => {
    i += 1
    const mark = decisionForClick(row, col, i);
    const changeHtmlValue = document.getElementById(id)
    changeHtmlValue.innerText = mark
    changeHtmlValue.onclick = null


    console.log(board, row, col, i)
}