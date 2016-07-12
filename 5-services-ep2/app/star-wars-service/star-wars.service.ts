import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
import {Response}from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/Rx';
import {Character} from '../common/character.interface';

@Injectable()
export class StarWarsService{

    private baseUrl: string = 'http://swapi.co/api';

    constructor(private http: Http){ }

    get(id: number): Observable<Character> {
        let character$ = this.http
        .get(`${this.baseUrl}/people/${id}`)
        .map(mapCharacter);
        
        return character$;
    }
}

function mapCharacter(response:Response): Character{
   return toCharacter(response.json());
}

function toCharacter(r:any): Character{
  let character = <Character>({
    name: r.name
  });
  return character;
}