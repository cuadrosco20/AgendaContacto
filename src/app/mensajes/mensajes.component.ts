import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service';

//  Service 
import { MensajeService } from '../servicios/mensaje.service';

// Class

// toastr
import { ToastrService } from 'ngx-toastr';
import { Mensaje } from '../models/mensajes';
import { ContactoService } from '../servicios/contacto.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajeList: Mensaje[];


  constructor(
    private ContactoService: ContactoService,
    private MensajesService: MensajeService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.MensajesService.getMensajes()
      .snapshotChanges().subscribe(item => {
        this.mensajeList = [];
          item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.mensajeList.push(x as Mensaje);
        });
      });
  }

}
