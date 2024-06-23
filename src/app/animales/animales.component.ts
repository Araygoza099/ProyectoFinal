import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../shared/animal.service';
import { RouterLink } from '@angular/router';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RegistrosService } from '../registros.service';
import { Cliente } from '../clientes/cliente.model';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  misAnimales: Animal[] = [];
  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  registros: Cliente[] = [];

  uid: string = 'RIZ1jD8oZuQzSJpQpUJwAI1RjsC3';

  constructor(public miservicio: AnimalService, private registroService: RegistrosService) {}

  ngOnInit(): void {
    this.misAnimales = this.miservicio.getAnimales();

    this.registroService.getRegistrosByIdusr(this.uid).subscribe(
      appointments => {
        const currentDate = new Date().toISOString().slice(0, 10); // Obtiene la fecha actual en formato 'YYYY-MM-DD'
        this.pastAppointments = appointments.filter(appointment => appointment.fecha < currentDate);
        this.upcomingAppointments = appointments.filter(appointment => appointment.fecha >= currentDate);
      },
      error => {
        console.error('Error fetching appointments:', error);
      }
    );

    this.registroService.getRegistrosByIdusr(this.uid).subscribe((registros) => {
      console.log('Usuario:',registros);
      this.registros = registros;
    });
  }

  async deleteRegistro(id:string){
    const response = await this.registroService.deleteRegistro(id);
  }

  
}