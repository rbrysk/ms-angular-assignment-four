import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    @Output()
    gameRunning = new EventEmitter<number>();

    @Output()
    gameReset = new EventEmitter<string>();

    i: number = 0;
    ref: any;
    numbers: Array<number> = [];

    startGame() {
      this.ref = setInterval(() => {
          this.gameRunning.emit(this.i++);
      }, 1000);
    }

    stopGame() {
        clearInterval(this.ref);
    }

    resetGame() {
      this.stopGame();
      this.gameReset.emit('Game stopped and reset');
      this.i = 0; // reset the counter
    }
}
