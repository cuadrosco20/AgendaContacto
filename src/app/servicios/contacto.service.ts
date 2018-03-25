import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Contacto } from '../models/contacto';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ContactoService {

  contactoList: AngularFireList<any>;
  selectedContacto: Contacto = new Contacto();

  constructor(private firebase: AngularFireDatabase) { }


  getContactos()
  {
    return this.contactoList = this.firebase.list('contactos');
  }

  insertContacto(contacto: Contacto)
  {
    this.contactoList.push({
    nombre: contacto.nombre,
    apellido: contacto.apellido,
    email: contacto.email,
    telefono:contacto.telefono
    });
  }

  updateContacto(contacto: Contacto)
  {
    this.contactoList.update(contacto.$key, {
      nombre: contacto.nombre,
      apellido: contacto.apellido,
      email: contacto.email,
      telefono:contacto.telefono
    });
  }

  deleteContacto($key:string)
  {
    this.contactoList.remove($key);
  }
}
