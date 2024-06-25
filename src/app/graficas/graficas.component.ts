import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  standalone: true,
  // imports: [],
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent implements OnInit {
  citas$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.citas$ = this.firestore.collection('citas').valueChanges();
  }

  ngOnInit(): void {
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
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
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
  }
}
