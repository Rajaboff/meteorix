import { Injectable } from '@angular/core';
import { PlayersClassic } from '../models/players-classic';

@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {

  testPlayersData: PlayersClassic[] = [
    {
      name: 'Матвей буланов',
      bet: 25,
      imgPath: '/assets/imgs/avatars/1.jpg',
      ticketMin: 1001,
      ticketMax: 5460
    },
    {
      name: 'Анатолий Будьба',
      bet: 15,
      imgPath: '/assets/imgs/avatars/2.jpg',
      ticketMin: 895,
      ticketMax: 1000
    },
    {
      name: 'Frederickko',
      bet: 33,
      imgPath: '/assets/imgs/avatars/3.jpg',
      ticketMin: 425,
      ticketMax: 852
    },
    {
      name: 'Манящий',
      bet: 12,
      imgPath: '/assets/imgs/avatars/4.jpg',
      ticketMin: 300,
      ticketMax: 1300
    },
  ]

  constructor() { }
}
