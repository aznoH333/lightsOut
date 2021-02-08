import {Component, Input} from '@angular/core';
import {Board} from "./board";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lightsOut';


  @Input('ngModel')
  width: any;
  height: any;
  turnCounter = 0;
  bestScore = 0;
  board = new Board(5, 5);

  apply() {

    this.board = new Board(this.width, this.height);
    this.turnCounter = 0;

  }


  clickOnTile(x: number, y: number) {
    this.board.flipValue(x, y);
    this.board.flipValue(x + 1, y);
    this.board.flipValue(x - 1, y);
    this.board.flipValue(x, y + 1);
    this.board.flipValue(x, y - 1);
    this.turnCounter += 1;
    this.board.checkVictory();

    if (this.board.getWin() == true && (this.turnCounter < this.bestScore || this.bestScore == 0 )){
      this.bestScore = this.turnCounter;
    }
  }
}

