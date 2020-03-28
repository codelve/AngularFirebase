import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config =  {
  apiKey: 'XXXXXXXXXX',
  authDomain: 'XXXXXXX.firebaseapp.com',
  databaseURL: 'https://XXXXXXX.firebaseio.com/',
  projectId: 'XXXXXXX',
  storageBucket: 'gs://XXXXXXX.appspot.com'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-maps-demo';

  constructor() {
    firebase.initializeApp(config);
  }
}
