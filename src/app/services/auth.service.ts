import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from 'firebase/database';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false; // Flag to indicate login status
  constructor(public auth: AngularFireAuth) {}

  login(username: string, password: string): boolean {
    // Implement your login logic here (e.g., API call)
    if (username.length > 0 && password.length > 0) {
      // Simulate successful login
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }

  // FIREBASE
  // async emailSignin(email: string, pass: string) {
  //   return new Promise((resolve) => {
  //     this.auth
  //       .signInWithEmailAndPassword(email, pass)
  //       .then((result) => {
  //         resolve(result.user);
  //       })
  //       .catch((err) => {
  //         throw new Error('Erro ao logar');
  //       });
  //   });
  // }

  // FIREBASE
  // async googleSignin() {
  //   try {
  //     const providers = new firebase.auth.GoogleAuthProvider();
  //     const credential = await this.auth.signInWithPopup(providers);
  //     return credential.user;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Erro ao logar googleSignin');
  //   }
  // }

  async signOut() {
    await this.auth.signOut();
    // TODO
    // this.user = null;
  }

  writeUserData(
    userId: number,
    name: string,
    email: string,
    imageUrl?: string
  ) {
    return new Promise((resolve) => {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
      })
        .then((res) => resolve(res))
        .catch((err) => console.error(err));
    });
  }
}
