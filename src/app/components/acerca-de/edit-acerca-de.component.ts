import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';

import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})

export class EditAcercaDeComponent implements OnInit {
uploadImage($event: Event) {
throw new Error('Method not implemented.');
}
onUpdate() {
throw new Error('Method not implemented.');
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  persona: persona = null;
    
    
  
}