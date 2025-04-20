import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink,UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
