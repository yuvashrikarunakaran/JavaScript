// Wikipedia: https://en.wikipedia.org/wiki/Knight%27s_tour
class OpenKnightTour {
  constructor(size) {
    // Initialize the chessboard and its size
    this.size = size;
    this.board = Array.from({ length: size }, () => Array(size).fill(0));
  }

  getValidMoves([row, col]) {
    // Calculate all possible knight moves from the current position
    const potentialMoves = [
      [row + 2, col - 1],
      [row + 2, col + 1],
      [row - 2, col - 1],
      [row - 2, col + 1],
      [row + 1, col - 2],
      [row + 1, col + 2],
      [row - 1, col - 2],
      [row - 1, col + 2],
    ];

    // Filter moves to keep only those within board boundaries
    return potentialMoves.filter(
      ([newRow, newCol]) =>
        newRow >= 0 && newRow < this.size && newCol >= 0 && newCol < this.size
    );
  }

  isBoardComplete() {
    // Check if all cells on the board have been visited
    return this.board.every((row) => row.every((cell) => cell !== 0));
  }

  solve() {
    // Attempt to solve the knight's tour for all starting positions
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        // Reset the board for a new attempt
        this.board = Array.from({ length: this.size }, () =>
          Array(this.size).fill(0)
        );

        // Start the tour from the current position
        this.board[row][col] = 1; // Mark the starting position
        if (this.solveFrom([row, col], 1)) return true;
      }
    }
    return false;
  }

  solveFrom([row, col], moveNumber) {
    // Base case: If the board is complete, the solution is found
    if (this.isBoardComplete()) return true;

    // Explore all valid moves
    for (const [nextRow, nextCol] of this.getValidMoves([row, col])) {
      if (this.board[nextRow][nextCol] === 0) {
        // Make a move and mark the cell
        this.board[nextRow][nextCol] = moveNumber + 1;

        // Recursively attempt to solve from the new position
        if (this.solveFrom([nextRow, nextCol], moveNumber + 1)) return true;

        // Backtrack: Reset the cell if no solution is found
        this.board[nextRow][nextCol] = 0;
      }
    }

    // Return false if no moves lead to a solution
    return false;
  }

  printBoard(output = console.log) {
    // Print the chessboard in a readable format
    for (const row of this.board) {
      output(row.map((cell) => (cell ? cell.toString().padStart(2, ' ') : ' .')).join(' '));
    }
  }
}

export { OpenKnightTour };


     
    
        
       
