import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.css']
})
export class UserMsgComponent implements OnInit {

  @Input() username: string = '';
  @Input() msg: string = '';
  @Input() nameColor: string = '';
  @Input() imgUrl: string = '';

  settings: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setImg() {
    return `url(${this.imgUrl})`
  }

}
