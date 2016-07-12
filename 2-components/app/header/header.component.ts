import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './app/header/header.component.html',
  //encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.ViewEncapsulation,
  //styles: ['.something-fancy{color: red}']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(){
    this.name = "Angular2 Application";
  }
 ngOnInit(): any{
   console.log('HeaderComponent running!');
 }
}