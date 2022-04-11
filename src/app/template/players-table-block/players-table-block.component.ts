import { Component, Input, OnInit } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';
import { PlayersDataService } from 'src/app/services/players-data.service';

@Component({
  selector: 'app-players-table-block',
  templateUrl: './players-table-block.component.html',
  styleUrls: ['./players-table-block.component.css']
})
export class PlayersTableBlockComponent implements OnInit {

  @Input() players: PlayersClassic[] = []

  constructor(public playerData: PlayersDataService) {
  }

  ngOnInit(): void {
    
  }

  setImgUrl(path: string){
    return `url(${path})`;
  }

}
