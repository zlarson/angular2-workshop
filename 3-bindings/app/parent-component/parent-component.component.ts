import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child-component/child-component.component';

@Component({
  selector: 'my-parent-component',
  template: `
    <h2>Custom Component Bindings Example</h2>
    <div class="panel panel-info">
        <div class="panel-heading"><h4>Parent Component</h4></div>
        <div class="panel-body">
            <my-child-component 
            [myName]="'Zach'" 
            (emitValueChanged)="fromChildComponent = $event"
            [myAge]=33></my-child-component><BR>
            From the Child Component: {{fromChildComponent}}
        </div>
    </div>
  `,
  directives: [ChildComponent]
})
export class ParentComponent {
    fromChildComponent: string = '';
}