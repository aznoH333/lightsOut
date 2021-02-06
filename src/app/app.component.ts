import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lightsOut';


  @Input('ngModel')
  width: any;
  height : any;

  board = new Board(5,5);

  apply(){
    this.board = new Board(this.width,this.height);
  }


  clickOnTile(x : number,y : number) {
    this.board.flipValue(x,y);
    this.board.flipValue(x+1,y);
    this.board.flipValue(x-1,y);
    this.board.flipValue(x,y+1);
    this.board.flipValue(x,y-1);

    this.board.checkVictory();
  }
}

class Board {
  private width = 5;
  private height = 5;
  private board : boolean[][];

  constructor(width : number,height : number){
    this.width = width;
    this.height = height;

    this.board = new Array(width);

    for (let x = 0;x < this.width;x++){
      this.board[x] = new Array(height);
      for (let y = 0;y < this.height;y++){
        //assign random value
        if (Math.random()> 0.5){
          this.board[x][y] = true;
        }else {
          this.board[x][y] = false;
        }
      }
    }
  }

  getBoard(){
    return this.board;
  }

  flipValue(x : number,y : number){

    if (x >= 0 && x < this.width && y >= 0 && y < this.height ){
      this.board[x][y] = !this.board[x][y]
    }
  }

  checkVictory(){
    let out = true;
    for (let x = 0;x < this.width;x++){
      for (let y = 0;y < this.height;y++){
        if (this.board[x][y]){
          out = false
        }
      }
    }
    return out;
  }
}
