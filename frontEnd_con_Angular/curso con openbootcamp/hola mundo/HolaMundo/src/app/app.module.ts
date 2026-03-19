import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos de Angular Material
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';

import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';






@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Importamos Reactive FormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    // Importamos los modulas de angular material que udamos en los formularios
    ReactiveFormsModule,
    // Importamos nuestro modulo personalizado
    ListsModule
    /* Ya no se importa el módulo HttpClientModule para hacer peticiones Http, solo basta con colocar
    provideHttpClient() en el providers: []
    */
    ,
    MatFormField
],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
