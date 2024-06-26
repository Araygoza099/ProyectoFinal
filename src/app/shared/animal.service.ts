import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { ANIMALES } from '../misanimales';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animales:Animal[]=ANIMALES;

  constructor(private router: Router) { }

  getAnimales():Animal[]{
    return this.animales;
  }

  getUnAnimal(posicion:number):Animal{
    return this.animales[posicion];
  }

  searchAnimal(nombreAnimal:string):number{
    let index = this.animales.findIndex(p => p.raza === nombreAnimal);
    if(index == -1){
      swal.fire({
        title: "Estas Seguro Que Es Su Nombre?",
        text: "No Logramos Encontrarl@ :(",
        icon: "question"
      }).then(() => {
        this.router.navigate(['/home']);
      });;
    }
    return index;
  }
}
