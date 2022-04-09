import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-bet-block',
  templateUrl: './total-bet-block.component.html',
  styleUrls: ['./total-bet-block.component.css']
})
export class TotalBetBlockComponent implements OnInit {

  @Input() seconds: number = 0;
  @Input() maxBet: number = 0;
  @Input() minBet: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
