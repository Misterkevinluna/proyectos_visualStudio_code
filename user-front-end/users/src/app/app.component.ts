import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { BikesService } from './services/bikes/bikes.service';
import { CarsService } from './services/cars/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'users';
  userForm!: FormGroup;

  constructor(public fb: FormBuilder, public userService: UserService){
    
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });;

  }

  guardar(): void{
    this.userService.saveUser(this.userForm.value).subscribe(resp=>{

    },
    error => {console.error(error)}
    
    )
  }
}
