import { Component } from '@angular/core';
import { ModalsService } from './services/modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuTab: boolean = false;
  chatTab: boolean = false;

  constructor(public modalsService: ModalsService) { }

  menuOpen() {
    this.menuTab = !this.menuTab;
    this.chatTab = this.menuTab ? false : this.chatTab;
  }

  chatOpen() {
    this.chatTab = !this.chatTab;
    this.menuTab = this.chatTab ? false : this.menuTab;
  }
}
