import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;
  email: string;
  password:string;

  constructor(private router:Router) { }

  onSubmit(formData) {
    
  }

  ngOnInit() {
  }

}
