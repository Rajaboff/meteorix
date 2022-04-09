import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  emojiBlock: boolean = false;

  msgs = [
    {username: 'Hariokosh', msg: 'Всем привет, подкиньте промик', nameColor: 'g-purple', imgUrl: '/assets/imgs/chat/1.png'},
    {username: 'Матвей буланов', msg: 'Не за что', nameColor: '', imgUrl: '/assets/imgs/chat/2.png'},
    {username: 'Player#1231', msg: 'макс тип', nameColor: 'blue', imgUrl: '/assets/imgs/chat/3.png'},
    {username: 'Cheater', msg: 'камбек 10к, понял спс', nameColor: 'orange', imgUrl: '/assets/imgs/chat/4.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openEmojis = () => this.emojiBlock = !this.emojiBlock;

}
