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

@Component({
  selector: 'app-contactolist',
  templateUrl: './contactolist.component.html',
  styleUrls: ['./contactolist.component.css']
})
export class ContactolistComponent implements OnInit {

  contactoList: Contacto[];

  constructor(
    
    private contactoService: ContactoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.contactoService.getContactos()
      .snapshotChanges().subscribe(item => {
        this.contactoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.contactoList.push(x as Contacto);
        });
      });
  }

  onEdit(contacto: Contacto) {
    this.contactoService.selectedContacto = Object.assign({}, contacto);
  }

  onDelete($key: string) {
    if(confirm('Estas seguro que quieres borrar este contacto?')) {
      this.contactoService.deleteContacto($key);
      this.toastr.warning('Elmininado Exitosamente', 'Contacto Eliminado');
    }
  }

}


