import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../shared/animal.service';
import { RouterLink } from '@angular/router';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';

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

  constructor(public miservicio: AnimalService) {}

  ngOnInit(): void {
    this.misAnimales = this.miservicio.getAnimales();
    this.pastAppointments = this.generatePastAppointmentsReport();
    this.upcomingAppointments = this.generateUpcomingAppointmentsReport();
  }

  generatePastAppointmentsReport(): any[] {
    const currentDate = new Date();
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    const pastAppointments = storedData.filter((appointment: any) => new Date(appointment.fecha) < currentDate);
    return pastAppointments;
  }
  
  generateUpcomingAppointmentsReport(): any[] {
    const currentDate = new Date();
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    const upcomingAppointments = storedData.filter((appointment: any) => new Date(appointment.fecha) >= currentDate);
    return upcomingAppointments;
  }
}