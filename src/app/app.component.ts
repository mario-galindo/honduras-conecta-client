import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'honduras-conecta-client';
  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('items').valueChanges();
  }
  
}
