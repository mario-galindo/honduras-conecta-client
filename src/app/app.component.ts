import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'
import { moveIn, fallIn, moveInLeft } from './router.animations'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class AppComponent {
  
  items: Observable<any[]>;
  title = 'honduras-conecta-client';
  state:string;

  constructor(
    firestore: AngularFirestore,
    public auth:AuthService,
    private router:Router
    ) {
      // if (!auth.user$) {
      //   this.router.navigate(['']);
      // }else{
      //   this.router.navigate(['login']);
      // }

     // this.router.navigate(['']);
    //this.items = firestore.collection('items').valueChanges();
  }

}
