import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-acerca',
  standalone: true,
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class AcercaComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    if(this.contactoForm.valid){
      console.log('Formulario válido', this.contactoForm.value);
    }else{
      console.log('Formulario inválido');
    }
  }
}