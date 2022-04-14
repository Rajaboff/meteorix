import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-tournaments',
  templateUrl: './modal-tournaments.component.html',
  styleUrls: ['./modal-tournaments.component.css']
})
export class ModalTournamentsComponent implements OnInit {

  @ViewChild('leaders', {static: true}) leadersCont: ElementRef | any;

  constructor() { }

  ngOnInit(): void {
    this.leadersCont.nativeElement.scrollLeft = (this.leadersCont.nativeElement.clientWidth / 2 - 80);
  }

}
