import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-child-component',
  template: `
    <div class="panel panel-danger">
        <div class="panel-heading"><h4>Child Component</h4></div>
        <div class="panel-body">
            Hey {{name}} you are {{age}} years old!<BR>
            emit a value to my parent: <input type="text" (keyup)="onEmitValueChanged(emitValue.value)" #emitValue />
        </div>
    </div>
  `,
  inputs: ['name:myName'],
  outputs: ['emitValueChanged']
})
export class ChildComponent {
    name: string = '';
    @Input('myAge') age: number = 20;
    emitValueChanged = new EventEmitter<string>();

    onEmitValueChanged(value: string){
        this.emitValueChanged.emit(value);
    }
}