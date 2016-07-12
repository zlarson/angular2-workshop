import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
    private _lastLoggedMessage: string;

    log(message:string){
        console.log('New Message: ' + message + ' | Last Message: ' + this._lastLoggedMessage);
        this._lastLoggedMessage = message;
    }
}