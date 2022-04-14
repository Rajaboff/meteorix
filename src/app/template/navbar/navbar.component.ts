import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged = false;

  constructor(private navigationService: NavigationService, public modalsService: ModalsService) { }

  ngOnInit(): void {
  }

  navigating = (url: string) => this.navigationService.navigateByUrl(url);
}
