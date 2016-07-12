import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BindingsComponent } from './bindings/bindings.component';
import {ParentComponent} from './parent-component/parent-component.component';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>   
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <my-bindings></my-bindings>

          <my-parent-component></my-parent-component>
          
        </div>
      </div>
    </div>
        `,
  directives: [HeaderComponent, BindingsComponent, ParentComponent]
})
export class AppComponent { }
