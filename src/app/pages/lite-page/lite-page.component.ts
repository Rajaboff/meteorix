import { Component, OnInit } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';
import { PlayersDataService } from 'src/app/services/players-data.service';

@Component({
  selector: 'app-lite-page',
  templateUrl: './lite-page.component.html',
  styleUrls: ['./lite-page.component.css']
})
export class LitePageComponent implements OnInit {

  players: PlayersClassic[] = [];

  testPlayersData: PlayersClassic[] = []

  bets = 0;

  minTicket: number = 1;
  maxTicket: number = 0;

  totalBet: number = 0;

  constructor(private playersData: PlayersDataService) {
    this.testPlayersData = playersData.testPlayersData;
  }

  ngOnInit(): void {
    this.testTiming();
  }

  testTiming() {
    let player = this.testPlayersData[this.bets];

    if(player){
      let testRandomTime = Math.ceil(Math.random() * 2000);
      setTimeout(() => {
        player.ticketMin = this.minTicket;
        this.maxTicket += player.bet * 100;
        player.ticketMax = this.maxTicket;

        this.players.push(player);
        this.totalBet += player.bet;
        
        this.bets++;

        this.minTicket = this.maxTicket + 1;

        this.testTiming();
      }, testRandomTime);
    }
  }

}
