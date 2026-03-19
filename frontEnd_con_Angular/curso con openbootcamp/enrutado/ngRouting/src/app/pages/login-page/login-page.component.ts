import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    let validacionToken = sessionStorage.getItem('token')

    if (validacionToken) {
      this.router.navigate(['/home']);
    }
  }

  loginUser(){
    sessionStorage.setItem('token', '123456789');
    this.router.navigate(['/contacts']);
  }

}
