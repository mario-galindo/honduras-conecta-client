import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(private router: Router) {

  }

  onSubmit(formData) {

  }

  ngOnInit() {
  }

}
