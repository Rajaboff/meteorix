import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlayersClassic } from 'src/app/models/players-classic';
import { PlayersDataService } from 'src/app/services/players-data.service';

@Component({
  selector: 'app-slide-players-block',
  templateUrl: './slide-players-block.component.html',
  styleUrls: ['./slide-players-block.component.css']
})
export class SlidePlayersBlockComponent implements OnInit {

  images = Array(100);
  positions = Array(100);
  iMin = 0;

  @Output() resetSeconds = new EventEmitter();

  curImgPush = 0;

  winner: PlayersClassic = {
    name: '',
    bet: 0,
    ticketMin: 0,
    ticketMax: 0,
    imgPath: ''
  };

  winTicket = 0;

  @Input() totalBet = 0;
  @Input() maxBet = 0;

  @ViewChild('imgsCont') imageContainer: ElementRef | any;
  @ViewChild('slider') slider: ElementRef | any;

  constructor(private playersData: PlayersDataService) {}

  ngOnInit(): void {

    for(let p of this.playersData.testPlayersData){
      let playerPerc = Math.ceil(p.bet / this.totalBet * 100);

      for(let i = this.iMin; i < playerPerc + this.iMin; i++) {
        this.images[i] = p.imgPath;
        this.positions[i] = {id: i, from: 80 * i, to: 80 * (i + 1)};
      }

      this.iMin += playerPerc;
    }

    this.shuffle(this.images)
    

    setTimeout(() => {
      let randNum = this.randomLeft();
      this.imageContainer.nativeElement.style.left = -randNum + 'px';
      this.imageContainer.nativeElement.style.transition = randNum < 500 ? `2s left ease` : `${Math.ceil(randNum) / 500}s left ease`
      
      let middlePos = randNum + this.slider.nativeElement.offsetWidth * 0.5;
      let winPos = this.positions.filter(a => a.from <= middlePos && a.to >= middlePos)[0]

      setTimeout(() => {
        this.winner = this.playersData.testPlayersData.filter(p => p.imgPath === this.images[winPos.id])[0];
        this.winTicket = Math.floor(Math.random() * (this.winner.ticketMax - this.winner.ticketMin) + this.winner.ticketMin);
      }, (randNum < 500 ? 2000 : Math.ceil(randNum) * 2));
    }, 250);
  }

  randomLeft() {
    return Math.ceil(Math.random() * 7200);
  }

  setUrl(path: string) {
    return `url(${path})`
  }

  shuffle(array: any) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
