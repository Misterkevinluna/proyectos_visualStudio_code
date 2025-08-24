import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dón Kevin';
  nombreDesdeElAppComponent = 'Luna';


  /* Esta accion se ejecuta cuando en el Hijo (Saludo Component) se pulsa un boton*/
  recibirMensajeDelHijo(evento: string){
    alert(evento)
  }
}
