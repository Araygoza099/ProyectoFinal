import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../animal';

import { ANIMALES } from '../misanimales';



@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  @Input() animal!: Animal;

  nombreAnimal:string = "";
  indice:number=0;

  miAnimal: Animal = {
    edad: 0,
    color: '',
    raza: '',
    tiempo: '',
    comportamiento: '',
    img: '',
    tipo:''
  };

  constructor(private animalservice: AnimalService, private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe(params => {
      this.animal = animalservice.getUnAnimal(params['raza']);
    });
    this.activeRoute.params.subscribe(params =>{
      this.nombreAnimal=params['animalh'];
      this.indice = this.animalservice.searchAnimal(this.nombreAnimal);
      console.log(this.indice);

      if(this.indice != 1){
        this.miAnimal=this.animalservice.getUnAnimal(this.indice);
        console.log(this.miAnimal);
      }
    });
  }
}

