import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';

  constructor(){
    alert("constructor executed");
  }

    clickMe() {
    alert("You clicked me");
  }
}
