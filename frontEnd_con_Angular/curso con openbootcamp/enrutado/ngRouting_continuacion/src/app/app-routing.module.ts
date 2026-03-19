import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    //Para cargar el componente HomePage desde la raiz del proyecto (localhost:4200/)
    /*El path: '' vacio representa la raiz y que no tiene ruta (localhost:4200/), el pathMatch: 'full' hace referencia
    al final de la ruta raiz del localhost:4200/  la cual es especificamente hace referencia a la barra "/" que es 
    el final y redirectTo: 'home' que indica que si vamos a la raiz del proyecto navegariamos a la Home (HomePage)*/   
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [ authGuard ]/*El canActivate: [AuthGuard] en la configuración del AppRoutingModule en Angular sirve para proteger rutas, es decir, 
    evitar que los usuarios accedan a ciertas páginas si no cumplen con una condición específica, como estar autenticados*/
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [ authGuard ]
  },
  {
    // El path con los dos '**' indica que si no a encontrado dentro de este modulo de enrutado alguna ruta que 
    //coinsida con estas, entonces que cargue el componente NotFoundPageComponent
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
