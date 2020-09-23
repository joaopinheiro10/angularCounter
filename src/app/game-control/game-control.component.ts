import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame()
  {
    this.interval = setInterval(
      () => {
        this.counter++;
        this.intervalFired.emit(this.counter)
      }, 1000
    )
  }

  onPauseGame()
  {
    clearInterval(this.interval)
  }

}
