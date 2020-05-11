import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {moveIn} from '../../router.animations'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
