import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { moveIn ,fallIn} from '../../router.animations'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;
  email:string;
  password:string;

  constructor(private router: Router) {

  }

  onSubmit(formData) {

  }

  ngOnInit() {
  }

}
