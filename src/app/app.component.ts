import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];

  constructor() {}
}
