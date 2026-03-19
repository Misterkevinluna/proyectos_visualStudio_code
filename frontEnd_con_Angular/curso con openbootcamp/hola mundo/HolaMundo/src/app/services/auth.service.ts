import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{

    let body = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders({
      "x-api-key": "reqres-free-v1"
    });
    /* Devolvemos la respuesta del observable cuando la peticion http sea complete, el componente suscrito accederá
    al token de login*/
    return this.http.post('https://reqres.in/api/login', body, { headers });
    /* ¡¡ TE DEJA UN ERROR EN CONSOLA PORQUE EL ETPOIN QUE USAS REQUIERE AUTENTIFICAIÓN
    EN LA CAVECERA DE LA PETICION !!! 
    <-- eso era antes, ahora investigando logre dar con la clave que se requeria en el encabezado de la peticion para la autenticación */
  }

}
