import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  modals: any = {
    deposit: false,
    withdraw: false,
    chests: false,
    tournaments: false,
    attention: false,
  }

  constructor() { }

  modalToggle(modal: string, show?: boolean) {
    for(let m in this.modals){
      this.modals[m] = false
    }

    this.modals[modal] = show || false;
  }
}
