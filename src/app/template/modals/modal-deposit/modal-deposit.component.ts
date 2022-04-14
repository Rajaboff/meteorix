import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-deposit',
  templateUrl: './modal-deposit.component.html',
  styleUrls: ['./modal-deposit.component.css']
})
export class ModalDepositComponent implements OnInit {

  promocode: string = '';

  promocodeActivated: boolean = false;
  promocodeInfo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  activateCode() {
    let testRandNum = Math.round(Math.random());

    if(this.promocode) {
      if(testRandNum === 0) {
        this.promocodeInfo = 'Промо-код на удвоение баланса активирован';
        this.promocodeActivated = true;
      }
      else {
        this.promocodeInfo = 'Промо-код не действителен или истек';
        this.promocodeActivated = false;
      }
    }
  }

}
