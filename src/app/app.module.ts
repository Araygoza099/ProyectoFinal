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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { GraficasComponent } from './graficas/graficas.component';



@NgModule({
  declarations: [AnimalesComponent, AcercaComponent, GraficasComponent],
  imports: [NgxMasonryModule, BrowserModule, AppRoutingModule, MatSnackBarModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
