import { Component, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';

@Component({
  selector: 'app-dice-bet-block',
  templateUrl: './dice-bet-block.component.html',
  styleUrls: ['./dice-bet-block.component.css']
})
export class DiceBetBlockComponent implements OnInit {

  constructor(public diceService: DiceService) { }

  ngOnInit(): void {
    this.diceService.setLessMore();
    this.diceService.setCoef();
  }
  
  betting = (bet: any) => this.diceService.bet = bet;

  chancing(chance: any) {
    this.diceService.chance = chance / 100;
    this.diceService.setLessMore();
    this.diceService.setCoef();
  }

}
