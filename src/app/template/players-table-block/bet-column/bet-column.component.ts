import { Component, Input, OnInit } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';

@Component({
  selector: 'app-bet-column',
  templateUrl: './bet-column.component.html',
  styleUrls: ['./bet-column.component.css']
})
export class BetColumnComponent implements OnInit {

  @Input() player: PlayersClassic = {
    name: '',
    imgPath: '',
    bet: 0,
    ticketMin: 0,
    ticketMax: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  setUrl(path: string) {
    return `url(${path})`
  }

}
