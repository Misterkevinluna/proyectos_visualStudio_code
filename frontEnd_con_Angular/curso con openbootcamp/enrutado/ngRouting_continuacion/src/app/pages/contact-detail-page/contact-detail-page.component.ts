import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss'
})
export class ContactDetailPageComponent implements OnInit{
  id: any | undefined;
  contact!: IContacto;
  filtroPrevio: string = 'todos';
  constructor(private idRuta: ActivatedRoute){}//ActivatedRoute:RutaActivada, este nos dice el contenido que hay en la URL

  
  ngOnInit(): void {
    //Vamos a leer los parametros dentro de la ruta
    //.params accede a los parámetros de ruta (Route Parameters) definidos en la configuración de rutas (path), osea en el rouring.models.
    this.idRuta.params.subscribe(
      (parametro: any)=>{
        if(parametro.id){
          this.id = parametro.id;
        }
      } 
    );
    if(history.state.data){
      this.contact = history.state.data
    }
    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro
    }
  }


}
