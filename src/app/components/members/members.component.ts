import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { moveIn, fallIn, moveInLeft } from '..//..//router.animations'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(private router:Router,public auth:AuthService) { }

  logout() {
    this.router.navigateByUrl('/login');
 }

  ngOnInit() {
  }

}
