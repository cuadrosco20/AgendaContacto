import { Component, OnInit } from '@angular/core';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'
@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
              ) { }

  ngOnInit() {}
   

}
