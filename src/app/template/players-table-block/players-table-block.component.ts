import { Component, Input, OnInit } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';

@Component({
  selector: 'app-players-table-block',
  templateUrl: './players-table-block.component.html',
  styleUrls: ['./players-table-block.component.css']
})
export class PlayersTableBlockComponent implements OnInit {

  @Input() players: PlayersClassic[] = []
  @Input() totalBet: number = 0;

  constructor() {}

  ngOnInit(): void {
    
  }

  setImgUrl(path: string){
    return `url(${path})`;
  }

}
