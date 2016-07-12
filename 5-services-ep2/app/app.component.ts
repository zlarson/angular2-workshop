import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {StarWarsComponent} from './star-wars-component/star-wars.component';
@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <my-star-wars></my-star-wars>
        </div>
      </div>      
    </div>
        `,
  directives: [HeaderComponent, StarWarsComponent]
})
export class AppComponent { }
