import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users= [
    {
      id:'1',
      name:"Zayn",
      age:21,
      email:"zayn@gmail.com"
    },
    {
      id:'2',
      name:"Zaid",
      age:27,
      email:"zaid@gmail.com"
    },
    {
      id:'3',
      name:"Zeeshan",
      age:20,
      email:"zeeshan@gmail.com"
    },
    
  ]

}
