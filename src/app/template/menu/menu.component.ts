import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private navigationService: NavigationService, public modalsService: ModalsService) { }

  ngOnInit(): void {
  }

  navigating = (url: string) => this.navigationService.navigateByUrl(url);

}
