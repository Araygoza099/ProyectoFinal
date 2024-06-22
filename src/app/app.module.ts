import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { AnimalesComponent } from './animales/animales.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AnimalesComponent],
  imports: [NgxMasonryModule, BrowserModule, AppRoutingModule, MatSnackBarModule],

})
export class AppModule { }
