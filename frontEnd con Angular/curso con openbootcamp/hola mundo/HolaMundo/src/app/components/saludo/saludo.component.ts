import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() nombre: string = 'kevin';
  @Output() mensajeEmitter:EventEmitter<string> = new EventEmitter<string>();

  misEstilos: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  }  

  constructor(){  }

  ngOnInit(): void {
    //instrucciones previas a la reenderización del componente
    console.log("ngOnInit del componente Saludo");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("CAMBIO: Valor anterior", changes['nombre'].previousValue);
    console.log("CAMBIO: Valor nuevo", changes['nombre'].currentValue);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy El componente va a desaparecer");
  }

  /* Ejemplo para gestionar un evento de tipo click en el DOM */

  enviarMensajeAlPadre(): void{
    /*alert(`Hola, ${this.nombre}. alerta despachada desde un click de boton`)*/
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. alerta despachada desde un click de boton`);
  }
}
