import { Injectable } from '@angular/core';
import { IContacto } from '../models/contacto.interface';
// Importamos la lsta de contactos
import { CONTACTOS } from '../mocks/contactos.mock';
// Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id: number): /*Promise<IContacto>*/ Observable<IContacto> | undefined{
    // Buscando el contacto por ID dentro de la lista de CONTACTOS mokeados
    const contacto = CONTACTOS.find((contactoIterado: IContacto) => contactoIterado.id === id);

    //Creamos un observable
    let observable: Observable<IContacto> = new Observable(observer =>{
      observer.next(contacto);// Emitir un valor a todo componente suscrito
      observer.complete();// No emitimos mas valores
    });

    if (contacto) {
      return observable;
      //return Promise.resolve(contacto);
    } else {
      return;
    }

  }
}
