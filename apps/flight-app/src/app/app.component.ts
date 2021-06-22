import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    // router.config([{}, ])

    // const MyComponent = import('my-mf/comp').then(m => m.MyComponent);
    // <div *ngComponentOutlet="MyComponent">

  }
}
