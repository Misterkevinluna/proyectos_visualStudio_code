import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{

  constructor(private authService: AuthService){
  }

  ngOnInit(): void {
    /* ¡¡ TE DEJA UN ERROR EN CONSOLA PORQUE EL ETPOIN QUE USAS REQUIERE AUTENTIFICAIÓN 
    EN LA CAVECERA DE LA PETICION !!! */
    this.authService.login('eve.holt@reqres.in', 'cityslicka')
    .subscribe({
      next: respuesta => {console.log('Respuesta Login', respuesta);
        if(respuesta.token) sessionStorage.setItem('token', respuesta.token);
      },
      error: err => console.error(`Ha ocurrido un error en el proceso de login: ${err}`),
      complete: () => console.log('Se ha completado la llamada de login en REQRES')
    });
  
  }


}
