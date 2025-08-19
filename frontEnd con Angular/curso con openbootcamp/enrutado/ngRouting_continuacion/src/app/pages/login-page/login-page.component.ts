import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{
  email: string = '';
  password: string = '';
  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    let validacionToken = sessionStorage.getItem('token')

    if (validacionToken) {
      this.router.navigate(['/home']);
    }
  }

  loginUser(){
    this.authService.login(this.email, this.password).subscribe
    ({
      next: (respuesta) => {
        if (respuesta.token) {
          sessionStorage.setItem('token', respuesta.token);
          this.router.navigate(['/home']);
        }
      },
      error: (errorAtrapado) => console.error(`Ha habido un error al hacer login: ${errorAtrapado}`),
      complete: () => console.info('Peticion de login terminado')
    });
  }

}
