import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
=======
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { provideFirebaseApp } from "@angular/fire/app";
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

>>>>>>> parent of c05e13c (Funcional (Finish)?)
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
