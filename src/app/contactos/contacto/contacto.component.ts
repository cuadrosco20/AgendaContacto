import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';


import {AuthService } from '../../servicios/auth.service';


//  Service 
import { ContactoService } from '../../servicios/contacto.service';

// Class
import { Contacto } from '../../models/contacto';

// toastr
import { ToastrService } from 'ngx-toastr';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private contactoService: ContactoService,
    private toastr: ToastrService
   

  ) { }

  ngOnInit() {
    this.contactoService.getContactos();
    this.resetForm();
  }

  onSubmit(contactoForm: NgForm)
  {
    if(contactoForm.value.$key == null)
      this.contactoService.insertContacto(contactoForm.value);
    else
    this.contactoService.updateContacto(contactoForm.value);
    
    this.resetForm(contactoForm);
    this.toastr.success('Operación Exitosa', 'Contacto Registrado');
  }

  resetForm(contactoForm?: NgForm)
  {
    if(contactoForm != null)
      contactoForm.reset();
      this.contactoService.selectedContacto = new Contacto();
  }

}
