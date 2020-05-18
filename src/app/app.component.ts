import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'
import { moveIn, fallIn, moveInLeft } from './router.animations'


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
  constructor(
    firestore: AngularFirestore,
    public auth:AuthService
    ) {
    this.items = firestore.collection('items').valueChanges();
  }

}
