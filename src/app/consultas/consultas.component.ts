import { Component } from '@angular/core';
import { RegistrosService } from '../registros.service';
import { Cliente } from '../clientes/cliente.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {

  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];
  todayAppointments: any[] = [];
  registros: Cliente[] = [];

  constructor(private registroService: RegistrosService) { }

  ngOnInit(): void {
    this.loadRegistros();
  }

  loadRegistros(): void {
    this.registroService.getRegistros().subscribe(
      appointments => {
        const currentDate = new Date().toISOString().slice(0, 10);
        
        this.pastAppointments = appointments.filter(appointment => appointment.fecha < currentDate);
        this.todayAppointments = appointments.filter(appointment => appointment.fecha === currentDate);
        this.upcomingAppointments = appointments.filter(appointment => appointment.fecha > currentDate);
      },
      error => {
        console.error('Error fetching appointments:', error);
      }
    );
  
    this.registroService.getRegistros().subscribe((registros) => {
      console.log('Citas:', registros);
      this.registros = registros;
    });
  }
  
  async deleteRegistro(id: string) {
    const response = await this.registroService.deleteRegistro(id);
  }

  toggleAccordion(section: string): void {
    const content = document.getElementById(`${section}-content`);
    if (content) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
  }
}
