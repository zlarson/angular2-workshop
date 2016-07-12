import { Component } from '@angular/core';

@Component({
  selector: 'my-bindings',
  templateUrl: './app/bindings/bindings.component.html'
})
export class BindingsComponent {

    eventBindingInititalValue: string;
    history: string = "";

    constructor(){
        this.eventBindingInititalValue = "initial value";
    }

 eventBindingOnKeyUp(value: string){
     this.history+= value + ",";
 }
}