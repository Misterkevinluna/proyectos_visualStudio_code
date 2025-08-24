import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.scss'
})
export class ListaContactosComponent implements OnInit, OnDestroy{
  // Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Subscripción de servicio
  subcripcion: Subscription | undefined;

  // Inyectamos en el constructor el servico de Contactos
  constructor(private contactoService: ContactoService){};

  ngOnInit(): void {
    this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => {
      this.listaContactos = lista
      console.table(this.listaContactos);
    })
    .catch((error) => console.error(`Ha habido un error al recuperar la lista de Contactos: ${error}`))
    .finally(() => console.log(`Petición de lista de contactos terminada`));
  };

  obtenerContacto(id: number){
    //console.log(`Obtener info del Contacto: ${id}`);

    this.subcripcion = this.contactoService.obtenerContactoPorId(id)
    ?.subscribe((contacto: IContacto) => this.contactoSeleccionado = contacto),
    (error: any) => console.error(`Ha habido un error al recuperar el Contactos con ID ${id}: ${error}`);

    // Con Promise
    /*this.contactoService.obtenerContactoPorId(id)
    ?.then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    .catch((error) => console.error(`Ha habido un error al recuperar el Contactos con ID ${id}: ${error}`))
    .finally(() => console.log(`Petición de busqueda de contactos por ID terminada`));
    */
  };

  ngOnDestroy(): void {
      this.subcripcion?.unsubscribe();
  }

}
