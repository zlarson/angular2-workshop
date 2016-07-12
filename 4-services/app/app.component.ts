import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {Component1Component} from './component-1/component-1.component';
import {Component2Component} from './component-2/component-2.component';
import {LoggerService} from './common/logger.service';
@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <my-component-1></my-component-1>
        </div>
        <div class="col-md-6">
          <my-component-2></my-component-2>
        </div>
      </div>
    </div>
        `,
  providers: [LoggerService],
  directives: [HeaderComponent, Component1Component, Component2Component]
})
export class AppComponent { }
