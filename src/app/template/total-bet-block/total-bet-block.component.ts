import { Component, Input, OnInit } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';
import { PlayersDataService } from 'src/app/services/players-data.service';

@Component({
  selector: 'app-total-bet-block',
  templateUrl: './total-bet-block.component.html',
  styleUrls: ['./total-bet-block.component.css']
})
export class TotalBetBlockComponent implements OnInit {

  @Input() seconds: number = 0;
  @Input() maxBet: number = 0;
  @Input() minBet: number = 0;
  @Input() totalBet: number = 0;

  @Input() players: PlayersClassic[] = [];

  minutes: number = 0;

  betSum: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.timing();
  }

  timing() {
    this.minutes = Math.floor(this.seconds / 60);
    this.seconds -= this.minutes * 60;
    let t = setInterval(() => {
      
      if(this.seconds <= 0 && this.minutes > 0) {
        this.minutes--;
        this.seconds = 60;
      }

      this.seconds > 0 ? this.seconds-- : clearInterval(t);
    }, 1000)
  }

  avarageNum(sum: number, maxSum: number) {
    return (sum / maxSum * 100) + '%';
  }

  betArrow(t: string) {
    if(t === 'add') {
      this.betSum++;
    }
    else {
      if(this.betSum !== 0){
        this.betSum--;
      }
    }
  }

}
