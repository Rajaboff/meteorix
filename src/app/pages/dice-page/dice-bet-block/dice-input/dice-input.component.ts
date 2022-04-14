import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';

@Component({
  selector: 'app-dice-input',
  templateUrl: './dice-input.component.html',
  styleUrls: ['./dice-input.component.css']
})
export class DiceInputComponent implements OnInit {

  @Input() title: string = '';
  @Input() minVal: number = 0;
  @Input() maxVal: number = 0;
  @Input() inpCheck: string = '';

  val: any;

  @Output() values = new EventEmitter();

  @ViewChild('input') inp: ElementRef | any;

  constructor(public diceService: DiceService) { }

  ngOnInit(): void {
  }

  checkingValue() {
    if(this.val < this.minVal) {
      this.val = this.minVal;
    }
    else if(this.val > this.maxVal){
      this.val = this.maxVal
    }
    this.inp.nativeElement.value = this.val;
    this.valEmit()
  } 

  valEmit() {
    this.values.emit(this.val);
  }

  divideVal() {
    this.val = Math.round(this.val / 2);
    this.checkingValue();
  }

  doubleVal() {
    this.val = this.val * 2;
    this.checkingValue();
  }

  maximalVal() {
    this.val = this.maxVal;
    this.checkingValue();
  }

  minimalVal() {
    this.val = this.minVal;
    this.checkingValue();
  }
}
