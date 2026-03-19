import { Component } from '@angular/core';


import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrl: './formulario-array.component.scss'
})
export class FormularioArrayComponent {
  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group({
      nombre: '',
      apellido: '',
      telefono: this.formBuilder.array([])// Inicializamos la lista de elefonos vacía
    });
  }

  // Metodo Getter para obtener el FormArray de la lista de telefonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefono') as FormArray
  };

  // Metodo para añadir Télefono a la lista
  anadirTelefono(){
    //Creamos un grupo de teléfono
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })
    // añádios el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo)
  }
  // Metodo para eliminar telefono de la lista
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index);
  }
}
