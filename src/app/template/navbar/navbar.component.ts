import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged = true;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigating = (url: string) => this.navigationService.navigateByUrl(url);
}
