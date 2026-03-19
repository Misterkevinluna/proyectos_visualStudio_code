import { Component, OnInit } from '@angular/core';

// Ejemplo basico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {
  //Definmos nuestro formulario
  miFormulario: FormGroup = new FormGroup({});

  //Inyectamos la clase FormBuilder para construir el FormGroup
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );   
    
    //Nos suscribimos a los cambios que ocurran en el Formulario y lo mostramos por consola
    this.miFormulario.valueChanges.subscribe(
      console.log//al habilitr una linea y colocar directamente console.log lo que venga en la subcripcion se muestra en consola
    );
  }

}
