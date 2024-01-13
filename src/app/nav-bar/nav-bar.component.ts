import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  @Input() pageTitle: string="Informacion";
  @Input() pageTitle2: string="Administracion";

  constructor() { }

  ngOnInit() {}

}
