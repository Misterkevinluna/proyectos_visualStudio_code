import { Component } from '@angular/core';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

  
  listaContactos: IContacto[] =[
    {
      id: 0,
      nombre: 'Martin',
      apellido: 'San Jose',
      email: 'martin@imaginagroup.com'
    },
    {
      id: 1,
      nombre: 'Andres',
      apellido: 'Garcia',
      email: 'andres@imaginagroup.com'
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Hernandez',
      email: 'ana@imaginagroup.com'
    }
  ];

}
