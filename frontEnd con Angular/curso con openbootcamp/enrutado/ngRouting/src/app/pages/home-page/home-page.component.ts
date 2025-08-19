import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  token: string | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  navegarAContacts(): void{
    this.router.navigate(['contacts']);
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
