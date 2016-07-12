import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>
    <!--<div class="something-fancy">custom css</div>-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          test content 
        </div>
      </div>
    </div>
        `,
  directives: [HeaderComponent]
})
export class AppComponent { }
