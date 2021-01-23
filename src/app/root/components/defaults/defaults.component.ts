import { Router, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.scss']
})
export class DefaultsComponent implements OnInit {
  
  constructor(private router: Router, private routerLinkActivate: RouterLinkActive) {}
  gotoLogin(){
    this.router.navigate(['login']) ;
  }

  gotoRegister(){
    this.router.navigate(['register']) ;
  }

  ngOnInit(): void {
  }

}
