import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbatr',
  templateUrl: './navbatr.component.html',
  styleUrls: ['./navbatr.component.css']
})
export class NavbatrComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  logeo(){
    this.auth.loginWithRedirect();
  }
  salir()
  {
    this.auth.logout();
  }
}
