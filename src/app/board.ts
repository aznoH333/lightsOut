export class Board {
  private width = 5;
  private height = 5;
  private win = false;
  private board: boolean[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.board = new Array(width);

    for (let x = 0; x < this.width; x++) {
      this.board[x] = new Array(height);
      for (let y = 0; y < this.height; y++) {
        //assign random value
        this.board[x][y] = Math.random() > 0.5;
      }
    }
  }

  getBoard() {
    return this.board;
  }

  flipValue(x: number, y: number) {

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.board[x][y] = !this.board[x][y];
    }
  }

  checkVictory() {
    let out = true;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.board[x][y]) {
          out = false;
        }
      }
    }
    this.win = out;
  }

  getWin() {
    return this.win;
  }
}
