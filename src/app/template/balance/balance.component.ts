import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(public modalsService: ModalsService) { }

  ngOnInit(): void {
  }

}
