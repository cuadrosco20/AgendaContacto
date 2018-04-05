import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Contacto } from '../models/contacto';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';



@Injectable()
export class ContactoService {

  contactoList: AngularFireList<any>;
  selectedContacto: Contacto = new Contacto();
  
  constructor(private afd: AngularFireDatabase) { }


  getContactos()
  {
    const usuAct = firebase.auth().currentUser.uid;
    console.log(usuAct);
    this.contactoList = this.afd.list('users/' + usuAct + '/contactos');
    return this.contactoList;
    
  }

 
  
  
  insertContacto(contacto: Contacto)
  {
    this.contactoList.push({
    nombre: contacto.nombre,
    apellido: contacto.apellido,
    email: contacto.email,
    telefono:contacto.telefono,
    dname:contacto.dname
    });
  }

  updateContacto(contacto: Contacto)
  {
    this.contactoList.update(contacto.$key, {
      nombre: contacto.nombre,
      apellido: contacto.apellido,
      email: contacto.email,
      telefono:contacto.telefono,
      dname:contacto.dname
    });
  }

  deleteContacto($key:string)
  {
    this.contactoList.remove($key);
  }
}
