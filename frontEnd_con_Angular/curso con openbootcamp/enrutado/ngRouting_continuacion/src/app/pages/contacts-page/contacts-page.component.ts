import { Component } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {
  filtroSexo: string = 'todos';
  listaContactos: IContacto[] =[];

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService){}

  ngOnInit(): void {
    //Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any)=>{
      console.log('QueryParams: ', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
      }
      //Obtenemos la lista de contactos
      this.contactService.obtenerContactos(this.filtroSexo)
      .then(lista => this.listaContactos = lista)
      .catch(error => console.error(`Ha habido un arror al obtener los contactos: ${error}`))
      .finally( () => console.info('Petición de contactos terminada'));
    }); 

    
  }

  //Ejemplo de paso de informacion entre componentes a través del ESTADO
  //Con este metodo le estamos pasando un objeto de tipo contacto a través del estado de la navegacion o URL
  //Con State no solo pasas objetos, tambien puedes pasar string, number, etc.
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras ={
      state:{
        data: contacto
      }
    }

    this.router.navigate(['/home'], navigationExtras);//Nos redirecciona Home page con un objeto como valor en el estado de la navegacion o URL
  }

}
