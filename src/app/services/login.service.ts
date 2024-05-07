import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public override http: HttpClient,
    public local: LocalStorageService
  ) {
    super(http);
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string): Promise<boolean> {
    const login = { email, password };

    return new Promise<boolean>((resolve) => {
      this.post('/auth/login', login).subscribe((res: any) => {
        if (res?.success) {
          const { data } = res;
          this.local.saveLogin(data);
        }

        resolve(res?.success);
      });
    });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    // return this.afAuth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     /* Call the SendVerificaitonMail() function when new user sign
    //     up and returns promise */
    //     this.SendVerificationMail();
    //     this.SetUserData(result.user);
    //   })
    //   .catch((error) => {
    //     window.alert(error.message);
    //   });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    // return this.afAuth.currentUser
    //   .then((u: any) => u.sendEmailVerification())
    //   .then(() => {
    //     this.router.navigate(['verify-email-address']);
    //   });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    // return this.afAuth
    //   .sendPasswordResetEmail(passwordResetEmail)
    //   .then(() => {
    //     window.alert('Password reset email sent, check your inbox.');
    //   })
    //   .catch((error) => {
    //     window.alert(error);
    //   });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    //   `users/${user.uid}`
    // );
    // const userData: User = {
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: user.displayName,
    //   photoURL: user.photoURL,
    //   emailVerified: user.emailVerified,
    // };
    // return userRef.set(userData, {
    //   merge: true,
    // });
  }

  // Sign out
  SignOut() {
    // return this.afAuth.signOut().then(() => {
    //   localStorage.removeItem('user');
    //   this.router.navigate(['sign-in']);
    // });
  }
}