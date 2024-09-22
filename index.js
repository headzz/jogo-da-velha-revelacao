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



/////////////////////////////THIS ONE WORKS////////////////////////////////////
// Initialize an empty board
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

// // Function to check if the current board has a winning line
// function checkWin() {
//   for (let line of winLines) {
//     const [a, b, c] = line;
//     if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
//       return true;
//     }
//   }
//   return false;
// }

// // Function to check if placing a mark would result in a win
// function wouldCompleteWin(row, col, mark) {
//   // Temporarily place the mark to simulate the move
//   board[row][col] = mark;
//   const winDetected = checkWin();
//   // Remove the temporary mark
//   board[row][col] = '';
//   return winDetected;
// }

// // Decision logic for each click, knowing the click position and move count
// function decisionForClick(row, col, moveCount) {
//   if (board[row][col] !== '') {
//     return; // Do nothing if the position is already filled
//   }

//   // For the first 8 moves, place a mark but avoid completing a win
//   if (moveCount < 8) {
//     const mark = moveCount % 2 === 0 ? 'X' : 'O'; // Alternate between X and O
    
//     // If placing the mark would complete a win, switch to the other mark
//     if (wouldCompleteWin(row, col, mark)) {
//       const alternateMark = mark === 'X' ? 'O' : 'X';
//       board[row][col] = alternateMark;
//       return alternateMark;
//     } else {
//       board[row][col] = mark;
//       return mark;
//     }
//   } else {
//     // On the 9th move, ensure that a winning move is made
//     const mark = 'X'; // Choose a winner (X or O)
//     board[row][col] = mark;
//     return mark;
//   }
// }

// // Example simulation with provided positions for clicks
// const clicks = [
//   [0, 0], [0, 1], [1, 1], [1, 0], [2, 2], [2, 0], [0, 2], [1, 2], [2, 1] // Last move will win
// ];

// // // Simulate the game
// // for (let i = 0; i < clicks.length; i++) {
// //   const [row, col] = clicks[i];
// //   const mark = decisionForClick(row, col, i);
// //   console.log(`Move ${i + 1}: Placed '${mark}' at (${row}, ${col})`);
// //   console.log(board);
// // }


// let i = 0;
// const changeInnerHtml = (row, col, id) => {
//     i += 1
//     const mark = decisionForClick(row, col, i);
//     const changeHtmlValue = document.getElementById(id)
//     changeHtmlValue.innerText = mark
//     changeHtmlValue.onclick = null


//     console.log(board, row, col, i)
// }

////////////////////////////////////(******/////////////////////////////END OF WORKING////////////////////////////////////////////////////////////////////////



//////////////HERE GOES NOTHING////////////////////

// function generateTicTacToeWin() {
//   // Define winning combinations
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//       [[0, 0], [1, 1], [2, 2]],  // Diagonal \
//       [[0, 2], [1, 1], [2, 0]],  // Diagonal /
//   ];

//   // Randomly choose a winning combination
//   const winningCombination = winningCombinations[Math.floor(Math.random() * winningCombinations.length)];

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   // Fill the remaining positions with 'O'
//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//               board[i][j] = 'O';
//           }
//       }
//   }

//   return { board, winningPositions: winningCombination };
// }

// // Example usage
// const { board, winningPositions } = generateTicTacToeWin();
// console.log("Board:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions:", winningPositions);




// function generateUniqueWinTicTacToe() {
//   // Define winning combinations
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//       [[0, 0], [1, 1], [2, 2]],  // Diagonal \
//       [[0, 2], [1, 1], [2, 0]],  // Diagonal /
//   ];

//   // Randomly choose a winning combination
//   const winningCombination = winningCombinations[Math.floor(Math.random() * winningCombinations.length)];

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   // Fill the remaining positions with 'O' or 'X'
//   const remainingPositions = [];

//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//               remainingPositions.push([i, j]);
//           }
//       }
//   }

//   // Fill remaining positions randomly without creating a win
//   remainingPositions.forEach(([row, col]) => {
//       // Randomly choose to fill with 'O' or 'X' (but not create a new win)
//       board[row][col] = Math.random() < 0.5 ? 'X' : 'O'; // Only 'O' to avoid new win
//   });

//   return { board, winningPositions: winningCombination };
// }

// // Example usage
// const { board, winningPositions } = generateUniqueWinTicTacToe();
// console.log("Board5:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions5:", winningPositions);




/////////////////////ALMOST
// function generateUniqueWinTicTacToe() {
//   // Define winning combinations
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//       [[0, 0], [1, 1], [2, 2]],  // Diagonal \
//       [[0, 2], [1, 1], [2, 0]],  // Diagonal /
//   ];

//   // Randomly choose a winning combination
//   const winningCombination = winningCombinations[Math.floor(Math.random() * winningCombinations.length)];

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   // Fill the remaining positions
//   const remainingPositions = [];

//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//               remainingPositions.push([i, j]);
//           }
//       }
//   }

//   // Fill remaining positions randomly
//   remainingPositions.forEach(([row, col]) => {
//       // Check if placing 'X' would create a new winning condition
//       let canPlaceX = true;

//       for (const combo of winningCombinations) {
//           const counts = { X: 0, O: 0 };
//           combo.forEach(([r, c]) => {
//               if (board[r][c] === 'X') counts.X++;
//               if (board[r][c] === 'O') counts.O++;
//           });

//           // If there are 2 Xs in a winning line and we try to add another X, it's a win
//           if (counts.X === 2 && counts.O === 0) {
//               canPlaceX = false;
//           }
//       }

//       // Randomly choose to fill with 'O' or 'X', respecting the win condition
//       if (Math.random() < 0.5 && canPlaceX) {
//           board[row][col] = 'X';
//       } else {
//           board[row][col] = 'O';
//       }
//   });

//   return { board, winningPositions: winningCombination };
// }

// // Example usage
// const { board, winningPositions } = generateUniqueWinTicTacToe();
// console.log("Board7:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions7:", winningPositions);

// function generateUniqueWinTicTacToe() {
//   // Define winning combinations
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//       [[0, 0], [1, 1], [2, 2]],  // Diagonal \
//       [[0, 2], [1, 1], [2, 0]],  // Diagonal /
//   ];

//   // Randomly choose a winning combination for 'X'
//   const winIndex = Math.floor(Math.random() * winningCombinations.length)
//   const winningCombination = winningCombinations[Math.floor(winIndex)];

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   // Fill the remaining positions
//   const remainingPositions = [];

//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//               remainingPositions.push([i, j]);
//           }
//       }
//   }

//   // Fill remaining positions randomly, ensuring no new winning condition for 'O'
//   remainingPositions.forEach(([row, col]) => {
//       // Check if placing 'O' would create a new winning condition
//       let canPlaceO = true;

//       for (const combo of winningCombinations) {
//           const counts = { X: 0, O: 0 };
//           combo.forEach(([r, c]) => {
//               if (board[r][c] === 'X') counts.X++;
//               if (board[r][c] === 'O') counts.O++;
//           });

//           // If there are 2 O's in a winning line and we try to add another O, it's a win
//           if (counts.O === 2 && counts.X === 0) {
//               canPlaceO = false;
//           }
//       }

//       // Fill with 'X' or 'O' ensuring no additional win for 'O'
//       if (Math.random() < 0.5 && canPlaceO) {
//           board[row][col] = 'O'; // Fill with 'O' if it won't create a win
//       } else {
//           board[row][col] = 'X'; // Fill with 'X'
//       }
//   });

//   // Ensure only one winning condition for 'X' and no wins for 'O'
//   for (const combo of winningCombinations) {
//       const counts = { X: 0, O: 0 };
//       combo.forEach(([r, c]) => {
//           if (board[r][c] === 'X') counts.X++;
//           if (board[r][c] === 'O') counts.O++;
//       });

//       // If 'O' has two in a line, we need to adjust
//       if (counts.O === 2) {
//           const emptyPosition = combo.find(([r, c]) => board[r][c] === '');
//           if (emptyPosition) {
//               board[emptyPosition[0]][emptyPosition[1]] = 'X'; // Change to 'X' to maintain the winning condition
//           }
//       }
//   }

//   return { board, winningPositions: winningCombination };
// }

// // Example usage
// const { board, winningPositions } = generateUniqueWinTicTacToe();
// console.log("Board:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions:", winningPositions);

// function generateUniqueWinTicTacToe() {
//   // Define winning combinations (only rows and columns)
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//   ];

//   // Randomly choose a winning combination for 'X'
//   const winningCombination = winningCombinations[Math.floor(Math.random() * winningCombinations.length)];

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   // Fill the remaining positions while avoiding diagonal wins and O wins
//   const remainingPositions = [];

//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//               remainingPositions.push([i, j]);
//           }
//       }
//   }

//   // Fill remaining positions randomly
//   remainingPositions.forEach(([row, col]) => {
//       // Check if placing 'O' would create a new winning condition for 'O'
//       let canPlaceO = true;

//       // Check all winning combinations to ensure 'O' does not create a win
//       for (const combo of winningCombinations) {
//           const counts = { X: 0, O: 0 };
//           combo.forEach(([r, c]) => {
//               if (board[r][c] === 'X') counts.X++;
//               if (board[r][c] === 'O') counts.O++;
//           });

//           // If there are 2 O's in a winning line and we try to add another O, it's a win
//           if (counts.O === 2 && counts.X === 0) {
//               canPlaceO = false;
//           }
//       }

//       // Avoid creating a diagonal win by checking diagonal positions
//       const isDiagonalPosition = (row === col) || (row + col === 2);
      
//       if (Math.random() < 0.5 && canPlaceO && !isDiagonalPosition) {
//           board[row][col] = 'O'; // Place 'O' if it won't create a win and is not diagonal
//       } else {
//           board[row][col] = 'X'; // Place 'X'
//       }
//   });

//   return { board, winningPositions: winningCombination };
// }

// // Example usage
// const { board, winningPositions } = generateUniqueWinTicTacToe();
// console.log("Board08:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions08:", winningPositions);

// {{{{{function generateUniqueWinTicTacToe() {

//   const others = {
//     X: 'O',
//     O: 'X'
//   }

//   // Define winning combinations (only rows and columns)
//   const winningCombinations = [
//       [[0, 0], [0, 1], [0, 2]],  // Row 1
//       [[1, 0], [1, 1], [1, 2]],  // Row 2
//       [[2, 0], [2, 1], [2, 2]],  // Row 3
//       [[0, 0], [1, 0], [2, 0]],  // Column 1
//       [[0, 1], [1, 1], [2, 1]],  // Column 2
//       [[0, 2], [1, 2], [2, 2]],  // Column 3
//   ];

//   // Randomly choose a winning combination for 'X'
//   const chooseRandomly = () => {
//     const value = Math.random() < 0.5 ? 'X' : 'O'
//     return value
//   }

//   // const winIndex = Math.floor(Math.random() * winningCombinations.length)

//   const winIndex = 0
//   const winningCombination = winningCombinations[winIndex];
//   console.log(winningCombination)

//   // Create a filled board
//   const board = [['', '', ''], ['', '', ''], ['', '', '']];

//   // Fill the winning positions with 'X'
//   for (const [row, col] of winningCombination) {
//       board[row][col] = 'X';
//   }

//   if(winIndex === 0){
//     const secondLine1 = chooseRandomly()
//     const secondLine2 = chooseRandomly()

//     console.log({secondLine1, secondLine2})
    
//     if(secondLine1 === secondLine2){
//       const changeLastItem = secondLine1 === 'X' ? 'O' : 'X'
//       board[1][0] = secondLine1
//       board[1][1] = secondLine2
//       board[1][2] = changeLastItem
//     } else {
//       const newValue = chooseRandomly()
//       board[1][0] = secondLine1
//       board[1][1] = secondLine2
//       board[1][2] = newValue
//     }
//     console.log(board[0], board[1])

//     console.log('fez as duas primeiras linhas', board[0], board[1])
//     if(board[1][0] === board[0][0]){
//       const objectValue = board[0][0]
//       const value = others[objectValue]
//       board[2][0] = value
//     } else {
//       if(board[1][1] === board[0][2]){
//         const objectValue = board[0][2]
//         const value = others[objectValue]
//         console.log('se a coluna for igual', value)
//         board[2][0] = value
//       } else {
//         const newValue = chooseRandomly()
//         console.log('primeira coluna diferente', newValue)
//         board[2][0] = newValue
//       }
//        if(board[0][1] === board[1][1]){
//         const value = others[board[0][1]]
//         board[2][1] = value
//        } else {
//         const newValue = chooseRandomly()
//        }
//     }


//   }}}}}}


  // // Fill the remaining positions while avoiding diagonal wins and O wins
  // const remainingPositions = [];


  // // Fill remaining positions randomly
  // remainingPositions.forEach(([row, col]) => {
  //     // Check if placing 'O' would create a new winning condition for 'O'
  //     let canPlaceO = true;

  //     // Check all winning combinations to ensure 'O' does not create a win
  //     for (const combo of winningCombinations) {
  //         const counts = { X: 0, O: 0 };
  //         combo.forEach(([r, c]) => {
  //             if (board[r][c] === 'X') counts.X++;
  //             if (board[r][c] === 'O') counts.O++;
  //         });

  //         // If there are 2 O's in a winning line and we try to add another O, it's a win
  //         if (counts.O === 2 && counts.X === 0) {
  //             canPlaceO = false;
  //         }
  //     }

  //     // Avoid creating a diagonal win by checking diagonal positions
  //     const isDiagonalPosition = (row === col) || (row + col === 2);
      
  //     if (Math.random() < 0.5 && canPlaceO && !isDiagonalPosition) {
  //         board[row][col] = 'O'; // Place 'O' if it won't create a win and is not diagonal
  //     } else {
  //         board[row][col] = 'X'; // Place 'X'
  //     }
  // });

//   return { board, winningPositions: winningCombination };
// }


///////////////////LIKED IT 
// const board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];

// function printBoard(board) {
//   board.forEach(row => {
//       console.log(row.join('|'));
//       console.log('-'.repeat(5));
//   });
// }

// function fillRow(board, rowIndex, symbol) {
//   for (let j = 0; j < 3; j++) {
//       board[rowIndex][j] = symbol;
//   }
// }

// function checkWinCondition(board) {
//   // Check rows
//   for (let i = 0; i < 3; i++) {
//       if (board[i].every(cell => cell === board[i][0] && cell !== ' ')) {
//           return true;
//       }
//   }
//   // Check columns
//   for (let j = 0; j < 3; j++) {
//       if (board[0][j] !== ' ' && board.every(row => row[j] === board[0][j])) {
//           return true;
//       }
//   }
//   return false;
// }

// function fillGame(board, winningRowIndex, playerSymbol) {
//   fillRow(board, winningRowIndex, playerSymbol);

//   // Fill first empty row randomly
//   const firstEmptyRow = board.findIndex((row, index) => index !== winningRowIndex && row.includes(' '));
//   if (firstEmptyRow !== -1) {
//       for (let j = 0; j < 3; j++) {
//           if (board[firstEmptyRow][j] === ' ') {
//               board[firstEmptyRow][j] = Math.random() < 0.5 ? 'X' : 'O';
//           }
//       }
//   }

//   // Fill second empty row
//   const secondEmptyRow = board.findIndex((row, index) => index !== winningRowIndex && index !== firstEmptyRow && row.includes(' '));
//   if (secondEmptyRow !== -1) {
//       // First cell logic
//       for (let j = 0; j < 3; j++) {
//           if (board[secondEmptyRow][j] === ' ') {
//               const colValues = board.map(row => row[j]);
//               if (colValues[0] !== colValues[1] && colValues[1] !== colValues[2]) {
//                   board[secondEmptyRow][j] = Math.random() < 0.5 ? 'X' : 'O';
//               }
//           }
//       }

//       // Second cell logic (similar to above)
//       for (let j = 0; j < 3; j++) {
//           if (board[secondEmptyRow][j] === ' ') {
//               const colValues = board.map(row => row[j]);
//               if (colValues[0] === colValues[1]) {
//                   board[secondEmptyRow][j] = colValues[0] === 'X' ? 'O' : 'X';
//               } else {
//                   board[secondEmptyRow][j] = Math.random() < 0.5 ? colValues[0] : colValues[1];
//               }
//           }
//       }

//       // Third cell logic
//       for (let j = 0; j < 3; j++) {
//           if (board[secondEmptyRow][j] === ' ') {
//               board[secondEmptyRow][j] = Math.random() < 0.5 ? 'X' : 'O';
//               if (checkWinCondition(board)) {
//                   // Adjust to prevent multiple winning conditions
//                   board[secondEmptyRow][j] = ' ';
//                   break; // You may need to implement a more complex logic for specific adjustments
//               }
//           }
//       }
//   }

//   // Final check for win conditions
//   if (checkWinCondition(board)) {
//       console.log("Winning condition met!");
//   } else {
//       console.log("Game continues...");
//   }
//   printBoard(board);
// }

// // Example usage
// const winningRowIndex = 0; // Row to win
// const playerSymbol = 'X';
// fillGame(board, winningRowIndex, playerSymbol);

/////////////FINISH LIKED IT


const board1 = [
  ['X', 'X', 'X'],
  ['O', 'O', 'X'],
  ['X', 'O', 'O']
];

const board2 = [
  ['X', 'O', 'X'],
  ['X', 'O', 'O'],
  ['X', 'X', 'O']
];

const board3 = [
  ['X', 'X', 'O'],
  ['X', 'O', 'O'],
  ['X', 'O', 'X']
];

const board4 = [
  ['X', 'O', 'O'],
  ['X', 'X', 'X'],
  ['O', 'X', 'O']
];

const board5 = [
  ['O', 'X', 'X'],
  ['O', 'X', 'X'],
  ['X', 'O', 'O']
];

const board6 = [
  ['X', 'X', 'O'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];

const possibleResults = [board1, board2, board3, board4, board5, board6] 
const winCondition = {0: [[0,0],[0,1],[0,2]], 1: [[0,0],[1,0],[2,0]], 2: [[0,0],[1,0],[2,0]], 3: [[1,0],[1,1],[1,2]], 4: [[0,2],[1,1],[2,0]], 5: [[0,0], [1,1], [2,2]]}

const index = Math.floor(Math.random() * 6);

let finalWin = winCondition[index]

const requiredBoard = possibleResults[index]

console.log(index)

console.log( requiredBoard[0])
console.table(requiredBoard)
console.log(finalWin)

// Example usage
// const { board, winningPositions } = generateUniqueWinTicTacToe();
// console.log("Board:");
// board.forEach(row => console.log(row));
// console.log("Winning Positions:", winningPositions);


const changeInnerHtml = (row, col, id) => {
      const mark = requiredBoard[row][col]
      const changeHtmlValue = document.getElementById(id)

      const render = mark === 'X' ? "👦🏻" : "👧🏼";
      
      const valueToRemove = [row,col]
      const filteredMatrix = finalWin.filter(subArray => 
        !(subArray[0] === valueToRemove[0] && subArray[1] === valueToRemove[1])
      );

      let myModal = bootstrap.Modal.getOrCreateInstance('#myModal');

      finalWin = filteredMatrix
      console.log(filteredMatrix)

      if(finalWin.length === 0){
        myModal.show();
        let video = document.getElementById('video-review')
        setTimeout(() => {
          video.play()
        }, 700);
      }
      changeHtmlValue.innerText = render
      changeHtmlValue.onclick = null
}