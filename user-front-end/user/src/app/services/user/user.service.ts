import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_SERVER = "http://localhost:8001/user/"

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveUser(user:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,user);
  }

  public deleteUser(id:number): Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"delete/"+id);
  }

  public saveCar(id:number, car:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "savecar/" + id, car);
  }

  public saveBike(id:number, bike:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "savebike/" + id, bike);
  }
}
