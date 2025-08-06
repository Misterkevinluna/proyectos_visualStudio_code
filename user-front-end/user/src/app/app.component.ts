import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { BikeService } from './services/bike/bike.service';
import { CarService } from './services/car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user';
  user: any;
  car: any;
  bike: any;
  userForm!: FormGroup;
  carForm!: FormGroup;
  selectedVehicle: number | null = null; // Variable para almacenar el valor seleccionado
  

  constructor(public fb: FormBuilder, public userService: UserService){
    
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
    });;

    this.carForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });;

    this.userService.getAllUsers().subscribe(rest =>{
      this.user = rest;
    },
      error =>{console.error(error)}
    );

  }

  guardar(): void{
    this.userService.saveUser(this.userForm.value).subscribe(resp=>{
      console.log(resp);
      this.user=this.user.filter((user: { id: any; })=> resp.id!==user.id);
      this.user.push(resp);
      this.carForm.patchValue({
        userId: resp.id

      });;
      this.userForm.reset();
    },
    error => {console.error(error)}
    )
  }

  eliminarUser(user: { id: number; }){
    this.userService.deleteUser(user.id).subscribe(resp =>{
      console.log(resp);
      if (resp === true) {
        this.user.pop(user);
      }
    },
    )
  }

  editar(user: { id: any; name: any; email: any; }){
    this.userForm.setValue({
      id:user.id,
      name:user.name, 
      email:user.email, 
    })
  }

  guardarVehiculo(): void{
    console.log("seleccion desde el metodo guardarVehiculo "+this.selectedVehicle)
    if (this.selectedVehicle === 1) {
      this.userService.saveBike(this.carForm.get('userId')?.value,this.carForm.value).subscribe(resp=>{
        this.bike = resp;
        console.log(this.bike);
        console.log("resultado" + this.carForm.get('userId')?.value);
      },
      error => {console.error(error)}
      
      )
    } else if (this.selectedVehicle === 2) {
      this.userService.saveCar(this.carForm.get('userId')?.value,this.carForm.value).subscribe(resp=>{
        this.car = resp;
        console.log(this.car);
        console.log("resultado" + this.carForm.get('userId')?.value);
      },
      error => {console.error(error)}
      
      )
    } else {
      this.selectedVehicle = null; // Manejar otros valores o casos
    }
    this.carForm.reset();
  }



  onVehicleSelectionChange(event: any): void {
    // Asignar el valor seleccionado a la variable
    const selectedValue = event.target.value;
    if (selectedValue === 'moto') {
      this.selectedVehicle = 1;
      console.log("seleccion en el metodo "+this.selectedVehicle)
    } else if (selectedValue === 'carro') {
      this.selectedVehicle = 2;
      console.log("seleccion en el metodo "+this.selectedVehicle)
    } else {
      this.selectedVehicle = null; // Manejar otros valores o casos
    }
  }
}
