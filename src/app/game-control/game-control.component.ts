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
}
