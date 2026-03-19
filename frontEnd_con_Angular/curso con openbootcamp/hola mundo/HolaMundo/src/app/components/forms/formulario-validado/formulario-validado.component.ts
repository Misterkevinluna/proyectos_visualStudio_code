import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrl: './formulario-validado.component.scss'
})
export class FormularioValidadoComponent implements OnInit{
  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      // Validators.required Valida la informacion que este requiere en dicho campo que en este caso es 'nombre', en pocas palabras valida que el campo contenga informacion.
      nombre: ['', Validators.required],// Campo Obligatorio
      apellidos: '',
      //En Validators.compose([]) se ingresan las validaciones que van a componer, que contendra o tendra este campo, es para el caso de añadirle varios tipos de validaciones
      //Validators.min(18)=el valor minimo que acepta esta variable es de 18, Validators.max(99)= el valor maximo que acepta esta variable es de 99
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],//Este campo es obligatorio llenar y valida que lo que estes ingresanmdo se un valor tipo email
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],/*Validators.pattern('[a-zA-Z]*') la validación se realiza a travez de un patrón
      y este patron en este caso es una expreción regular de string, que valida que hallan letras de la 'a' a la 'z' tanto en mayusculas como en minusculas*/
      acepta: [false, Validators.requiredTrue]// Requiere un valor de True y este lo valida.
    });
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }
  get apellidos(){
    return this.miFormularioValidado.get('apellidos');
  }
  get edad(){
    return this.miFormularioValidado.get('edad');
  }
  get email(){
    return this.miFormularioValidado.get('email');
  }
  get password(){
    return this.miFormularioValidado.get('password');
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  //Metodo de Submit del formulario
  enviarFormulario(){
    if (this.miFormularioValidado.valid) {/*Comprovar que el formulario sea valido es comprovar que todos los campos o atributos del formulario en los que sea obligatorio la incercion de 
      datos contenga la informacion o datos correspondientes*/ 
      //Controlamos que el formulario sea valido
      console.table(this.miFormularioValidado.value);

      //Se resetean los campos del formulario
      this.miFormularioValidado.reset();
    }
  }

}
