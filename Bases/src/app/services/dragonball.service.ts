import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DragonballService {

character = signal<Character[]>([
  {id:1, name:'Goku', power:9001},
  {id:2, name:'Vegeta', power:7500}
]);

CharacterAddComponent(Character: Character){
  this.character.update(
    list => [... list, Character]
  )
}
}
