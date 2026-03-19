import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss'
})
export class ContactDetailPageComponent implements OnInit{
  id: any | undefined;
  constructor(private idRuta: ActivatedRoute){}//ActivatedRoute:RutaActivada, este nos dice el contenido que hay en la URL

  
  ngOnInit(): void {
    //Vamos a leer los parametros dentro de la ruta
    //.params es para acceder a los parametros de la url
    this.idRuta.params.subscribe(
      (parametro: any)=>{
        if(parametro.id){
          this.id = parametro.id;
        }
      } 
    );
    
  }


}
