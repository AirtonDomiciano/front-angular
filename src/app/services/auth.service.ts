import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  async emailSignin(email: string, pass: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, pass);
      return result.user;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao logar');
    }
  }

  async googleSignin() {
    try {
      const providers = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(providers);
      return credential.user;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao logar googleSignin');
    }
  }

  async signOut() {
    await this.auth.signOut();
    // TODO
    // this.user = null;
  }
}
