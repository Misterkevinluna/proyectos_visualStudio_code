import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCursos: string[] = ['TypeScript','JavaScript', 'Java SE', 'C#', 'PHP'];
  habilitar:boolean = true;

  textButton: String = 'Ocultar';

  setHabilitar(): void{
    this.habilitar = this.habilitar == true ? false: true;
    this.textButton =  this.habilitar == true? 'Ocultar': 'Mostrar';
  }
}
