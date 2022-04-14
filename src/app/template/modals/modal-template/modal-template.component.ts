import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {

  constructor(public modalsService: ModalsService) { }

  ngOnInit(): void {
  }

}
