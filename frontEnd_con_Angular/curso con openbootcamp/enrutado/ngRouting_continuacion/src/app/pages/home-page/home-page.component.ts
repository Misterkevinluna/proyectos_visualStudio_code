import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  token: string | null = null;
  contactoSeleccionado: IContacto | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
    //Comprovar si existe el token en el sessionStorage
    this.token = sessionStorage.getItem('token'); 

    //Leemos del estado del historial de navegación
    if (history.state.data) {
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data
    }
  }

  navegarAContacts(): void{
    /*queryParams accede a los parámetros de consulta (Query String), que son valores que van después del ? en la URL. Son parametros que se le añaden a la ruta a deferencia
    de los parametros que ya vienen definidos o defines desde la configuracin de rutas en el path (routin.module)*/
    //Se usa queryParams, funcina igual que el State, la diferencia es que estos datos o parametros se envian y muestran directamente por el etpoin (URL) 
    //Lo recomendable es no pasar informacion sencible por este medio como contraseñas ya que estas se podran ver en la URL
    let navigationExtras: NavigationExtras = {
      queryParams:{
        sexo: 'todos'
      }
    }

    this.router.navigate(['contacts'], navigationExtras);
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
