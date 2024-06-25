import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Chart, ChartType } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  citas$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.citas$ = this.firestore.collection('citas').valueChanges();
  }

  ngOnInit(): void {
    // No generamos el gráfico aquí, lo haremos en ngAfterViewInit
  }

  ngAfterViewInit(): void {
    this.citas$.subscribe(citas => {
      const tipoAnimalData = this.calcularPorcentajeTipos(citas);
      this.generarGrafico(tipoAnimalData);
    });
  }

  calcularPorcentajeTipos(citas: any[]): { [key: string]: number } {
    const tipos = citas.map(cita => cita.animal.tipo);
    const conteo = tipos.reduce((acc: { [key: string]: number }, tipo) => {
      acc[tipo] = (acc[tipo] || 0) + 1;
      return acc;
    }, {});

    const total = tipos.length;
    const porcentajes: { [key: string]: number } = {};
    for (const tipo in conteo) {
      porcentajes[tipo] = (conteo[tipo] / total) * 100;
    }

    return porcentajes;
  }

  generarGrafico(data: { [key: string]: number }) {
    if (this.myChart) {
      const ctx = this.myChart.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'pie' as ChartType,
          data: {
            labels: Object.keys(data),
            datasets: [{
              data: Object.values(data),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
          },
          options: {
            responsive: true
          }
        });
      } else {
        console.error('Unable to get 2D context from canvas');
      }
    } else {
      console.error('Canvas element not found');
    }
  }
}