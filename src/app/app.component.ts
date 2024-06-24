import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { FooterComponent } from './footer/footer.component';
import { TipsComponent } from './tips/tips.component';
import {MatTableModule} from '@angular/material/table';
import { LectorPantallaComponent } from './lector-pantalla/lector-pantalla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule,RouterOutlet, HeaderComponent, HomeComponent, AcercaComponent, DonadoresComponent, TipsComponent, RouterModule, FooterComponent, LectorPantallaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniProyectoDos';
}
