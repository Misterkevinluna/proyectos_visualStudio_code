import { Injectable } from '@angular/core';
import {CLIENTES} from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }
  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    //return this.http.get<Cliente[]>(this.urlEndPoint); //Esta es una forma, se Castea para que sea de tipo Cliente, el Cast o Casteo se realiza de la siguiente forma <Cliente[]>
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])// esta es otra forma, usando map
    );
  }
}
