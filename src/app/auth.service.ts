import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, RecaptchaVerifier,signInWithPhoneNumber } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable'
import { from } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';
import firebase from 'firebase/compat/'; // Import the 'firebase' namespace
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private firebaseAuth: Auth) { }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then ( () => {});
    return from(promise);
  }

  loginWithSms(phoneNumber: string, reCAPTCHA : RecaptchaVerifier): Observable<void> {
    // Login logic here
    const promise = signInWithPhoneNumber(
      this.firebaseAuth, 
      phoneNumber, 
      reCAPTCHA,

    ).then(() => {});
    return from(promise);
  }

  verifyOTP(verificationCode: string, confirmationResult: firebase.auth.ConfirmationResult) {
    return confirmationResult.confirm(verificationCode);
  }

  signUp(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from(promise);
  }

  
}