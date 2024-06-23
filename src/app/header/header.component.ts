import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AcercaComponent } from '../acerca/acerca.component';
import { DonadoresComponent } from '../donadores/donadores.component';
import { TipsComponent } from '../tips/tips.component';
import {MatIconModule} from '@angular/material/icon';
import { AnimalesComponent } from '../animales/animales.component';
import { BusquedaService } from '../busqueda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, HomeComponent, AcercaComponent, DonadoresComponent, TipsComponent, RouterModule, MatIconModule, AnimalesComponent, CommonModule],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router, private busquedaService: BusquedaService) { }

  nombreBusqueda(nombre: string) {
    this.busquedaService.cambiarNombre(nombre);
    this.router.navigate(['/buscador', nombre]);
  }

  colorBase = '#18708c';

  
}
