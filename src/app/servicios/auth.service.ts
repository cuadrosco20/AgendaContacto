import { Injectable } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {  AngularFireAuthModule } from 'angularfire2/auth';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import {AngularFireList} from 'angularfire2/database';
import{Usuario} from '../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';




@Injectable()
export class AuthService {


 
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UsuarioService
 

  )  { }


  
  registraruser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
       err=> reject(err));
    });
  }


  loginEmail(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
       err=> reject(err));
    });
  }
getAuth(){
  return this.afAuth.authState.map(auth => auth);
  
}


logout(){
  return this.afAuth.auth.signOut();
}

}

