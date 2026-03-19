import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  
  clientes: Cliente[];

  constructor(private clienteService: ClienteService){}

  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
