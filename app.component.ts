import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
         count=0;
  getName(){
    this.count=this.count+1;
  }
  setName(){
    this.count=this.count=0;
  }
  vetName(){
    this.count=this.count-1;
  }
}
