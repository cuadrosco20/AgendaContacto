import { Injectable } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {  AngularFireAuthModule } from 'angularfire2/auth';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import {AngularFireList} from 'angularfire2/database';
import{Contacto} from '../models/contacto';
import { Router } from '@angular/router';
import { ContactoService } from './contacto.service';



@Injectable()
export class AuthService {

  
  constructor(
    private afAuth: AngularFireAuth,
    private contactoService: ContactoService
    

  ) 
   { }

  
   registraruser(email:string, pass:string){
   return firebase.auth().createUserWithEmailAndPassword(email, pass)
     .then(userData=> {
       
      // firebase.database().ref('users/'+ userData.uid).child(userData.uid).set({email:email})
       //firebase.database().ref('users').set({email:email})
       firebase.database().ref('users/'+ userData.uid).set({email:email})
       
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

