import { Component, Input } from '@angular/core';
import { Cliente, Animal } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from '../../calendario/calendario.component';
import { RouterLink } from '@angular/router';
import { UnanimalComponent } from '../../unanimal/unanimal.component';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [FormsModule, CalendarioComponent, RouterLink, UnanimalComponent], 
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent {

  cliente!: Cliente;
  @Input() animal: any;

  horaSeleccionada: number = 0;

  horasDisponibles: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  horasDeshabilitadas: number[] = [];

  constructor(private clientesService: ClientesService,  private snackBar: MatSnackBar){}

  ngOnInit(){
    this.cliente = this.clientesService.nuevoCliente();
    this.pastAppointments = this.generatePastAppointmentsReport();
    this.upcomingAppointments = this.generateUpcomingAppointmentsReport();
  }

  nuevoCliente(): void {
    this.cliente.animal = this.animal;
    this.cliente.hora = this.horaSeleccionada;
    this.clientesService.agregarCliente(this.cliente);
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    if (storedData.some((cliente: Cliente) => cliente.id === this.cliente.id)) {
      this.snackBar.open('Cliente agregado con éxito', 'Cerrar', {
        duration: 5000,
      });
    } else {
      this.snackBar.open('Error al agregar el cliente', 'Cerrar', {
        duration: 5000,
      });
    }
    this.cliente = this.clientesService.nuevoCliente();
    setTimeout(() => window.location.reload(), 5000);
  }

    onDateChange(date: Date | undefined) {
      if (date) {
        let aux:number = 0;
        this.horasDeshabilitadas = [];
        const storedData = JSON.parse(localStorage.getItem('data') || '[]');
        let formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
        for(let i = 0; i < storedData.length; i++){
          if(storedData[i].fecha === formattedDate){
            let hora : number = parseInt(storedData[i].hora, 10);
            this.horasDeshabilitadas[aux] = hora;
            aux++;
          }
        }
        this.cliente.fecha = formattedDate;
      }
    }

    generatePastAppointmentsReport(): any[] {
      const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
      const storedData = JSON.parse(localStorage.getItem('data') || '[]');
      const pastAppointments = storedData.filter((appointment: any) => appointment.fecha < currentDate);
      return pastAppointments;
    }
  
    generateUpcomingAppointmentsReport(): any[] {
      const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
      const storedData = JSON.parse(localStorage.getItem('data') || '[]');
      const upcomingAppointments = storedData.filter((appointment: any) => appointment.fecha >= currentDate);
      return upcomingAppointments;
    }
}
