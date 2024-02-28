import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    oddNumbers: Array<number> = [];
    evenNumbers: Array<number> = [];

    onStartGame(number: number) {
        if (number % 2 === 0) {
            this.evenNumbers.push(number);
        } else {
            this.oddNumbers.push(number);
        }
    }

    onPauseGame(event: any) {
        console.log('Game paused');
    }
}
