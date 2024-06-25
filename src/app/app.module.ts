import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { AnimalesComponent } from './animales/animales.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';

@NgModule({
  declarations: [AnimalesComponent, AcercaComponent],
  imports: [NgxMasonryModule, BrowserModule, AppRoutingModule, MatSnackBarModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
