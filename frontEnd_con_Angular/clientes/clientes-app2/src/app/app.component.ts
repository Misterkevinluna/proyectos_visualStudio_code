import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenido a Angular';

  curso: String = 'Curso Spring 5 con Angular 18';
  profesor: String = 'Kevin Luna Jimenez';
}
