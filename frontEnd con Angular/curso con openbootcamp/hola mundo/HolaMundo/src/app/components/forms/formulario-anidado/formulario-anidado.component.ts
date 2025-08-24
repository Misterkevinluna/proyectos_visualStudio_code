import { Component } from '@angular/core';

// Importamos de Reactive Forms para crear un formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrl: './formulario-anidado.component.scss'
})
export class FormularioAnidadoComponent {
  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    // Agrupación para telefonos
    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })
    const telefonoMovil = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil
    })
  }

}
