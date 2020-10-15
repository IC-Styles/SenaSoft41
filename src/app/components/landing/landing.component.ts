import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthService ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  logeo(){
    // tslint:disable-next-line: no-unused-expression
    this.auth.loginWithRedirect();
  }
}
