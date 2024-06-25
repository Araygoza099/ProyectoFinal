import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-acerca',
  standalone: true,
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css',
  imports: [CommonModule, ContactoComponent]
})
export class AcercaComponent {}