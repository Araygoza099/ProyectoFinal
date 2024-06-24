import { Component, Input } from '@angular/core';
import { Cliente, Animal } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { FormGroup, FormsModule, FormControl } from '@angular/forms';
import { CalendarioComponent } from '../../calendario/calendario.component';
import { RouterLink } from '@angular/router';
import { UnanimalComponent } from '../../unanimal/unanimal.component';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrosService } from '../../registros.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [FormsModule, CalendarioComponent, RouterLink, UnanimalComponent, FormsModule, ReactiveFormsModule, CommonModule], 
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit{

  cliente!: Cliente;
  @Input() animal: any;

  uid: string | null = null;

  horaSeleccionada: number = 0;

  horasDisponibles: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  horasDeshabilitadas: number[] = [];


  constructor(private clientesService: ClientesService,  private snackBar: MatSnackBar, private registroService: RegistrosService, private authService: AuthService){
    
  }

  ngOnInit(){
    this.authService.getUid().subscribe((uid) => {
      if (uid) {
        this.uid = uid;
        this.cliente.uid = this.uid;
        console.log('User UID:', this.uid);
      } else {
        console.log('No user is currently logged in.');
      }
    });

    this.cliente = this.clientesService.nuevoCliente();
    this.pastAppointments = this.generatePastAppointmentsReport();
    this.upcomingAppointments = this.generateUpcomingAppointmentsReport();

  }

  async nuevoCliente() {
    try {
      this.cliente.animal = this.animal;
      this.cliente.hora = this.horaSeleccionada;
      const response = await this.registroService.addRegistro(this.cliente);
      this.snackBar.open('Cliente agregado con éxito', 'Cerrar', {
        duration: 5000,
      });
      this.cliente = this.clientesService.nuevoCliente();
      setTimeout(() => window.location.reload(), 5000);
    } catch (error) {
      this.snackBar.open('Error al agregar el cliente', 'Cerrar', {
        duration: 5000,
      });
      this.cliente = this.clientesService.nuevoCliente();
      setTimeout(() => window.location.reload(), 5000);
  }
}

onDateChange(date: Date | undefined) {
  if (date) {
    this.horasDeshabilitadas = [];
    let formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
    
    this.registroService.getRegistrosByFecha(formattedDate).subscribe((storedData) => {
      storedData.forEach((data) => {
        let hora: number = parseInt(data.hora, 10);
        this.horasDeshabilitadas.push(hora);
      });
      this.cliente.fecha = formattedDate;
    });
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
