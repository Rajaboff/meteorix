import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  bet: number = 0;

  // From 0.1 = 10% to 0.9 = 90%
  chance: number = 0;

  coef: number = 0;

  info: string = 'Возможный выигрыш';

  lessThan: number = 0;
  moreThan: number = 0;

  maxNum: number = 1000;

  randNum: any;

  win: boolean = false;

  constructor() { }

  setLessMore() {
    this.lessThan = this.maxNum * this.chance - 1;
    this.moreThan = this.maxNum - (this.maxNum * this.chance);
  }

  randomNum(btn: string) {
    if(this.bet > 0 && this.chance > 0) {
      this.randNum = Math.floor(Math.random() * this.maxNum);
      if(btn === 'less') {
        this.win = this.randNum <= this.lessThan ? true : false;
        this.info = this.randNum <= this.lessThan ? 'Удачно!' : 'Проигрыш';  
      }
      else {
        this.win =  this.randNum >= this.moreThan - 1 ? true : false;
        this.info = this.randNum >= this.moreThan - 1 ? 'Удачно!' : 'Проигрыш';  
      }
    }
  }

  setCoef() {
    this.coef = 1 + (1 - this.chance);
    this.randNum = 0;
  }

  doubleVal = (val: string) => val === 'bet' ? this.bet * 2 : this.chance * 2;

}
