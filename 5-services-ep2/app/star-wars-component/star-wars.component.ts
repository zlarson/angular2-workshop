import { Component, OnInit} from '@angular/core';
import { StarWarsService } from '../star-wars-service/star-wars.service';
import { Character } from '../common/character.interface';

@Component({
    selector: 'my-star-wars',
    templateUrl: './app/star-wars-component/star-wars.component.html',
    providers:[StarWarsService]
})
export class StarWarsComponent implements OnInit{
    constructor(private _starWarsInfoService: StarWarsService){}

    character: Character;

    onGetCharacterClick(id: number){
        this._starWarsInfoService
            .get(id)
            .subscribe(c => this.character = c)
    }

    ngOnInit() : any{
        
    }
}