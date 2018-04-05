import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Mensaje } from '../models/mensajes';

import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';


@Injectable()
export class MensajeService {
  userList: AngularFireList<any>;
  messageList: AngularFireList<any>;
  selectedMensaje: Mensaje = new Mensaje();
  
  constructor(private afd: AngularFireDatabase) { }


  getMensajes()
  {
    const usuAct = firebase.auth().currentUser.uid;
    console.log(usuAct);
    this.getUid('sevilla.felipe@gmail.com');
    this.messageList = this.afd.list('users/' + usuAct + '/mensajes');
    return this.messageList; 
  }

  getUid(email){
  {
    var test = this.afd.list('/users', ref => ref.orderByChild('email').equalTo(email)).snapshotChanges().subscribe(users =>{
        console.log(users);
    });
    console.log(test);
    return this.userList; 
  }

}
