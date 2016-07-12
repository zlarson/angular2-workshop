import {Component} from '@angular/core';
import {LoggerService} from '../common/logger.service';

@Component({
    selector: 'my-component-2',
    template: `
        <div class="panel panel-info">
            <div class="panel-heading"><h4>Component 2</h4></div>
            <div class="panel-body">
                <input type="text" class="form-control" #message><BR>
                <button class="btn btn-success" (click)="onLog(message.value)">Log Message</button>
            </div>
        </div>        
    `,
    providers: [LoggerService]
})
export class Component2Component{
    
    constructor(private _loggerService: LoggerService){}

    onLog(message: string){
        this._loggerService.log(message);
    }
}