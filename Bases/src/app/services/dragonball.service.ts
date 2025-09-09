import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharacterListComponent } from '../components/dragonball/character-list/character-list.component';

const loadFormStorage = ():Character[] =>{
  const character = localStorage.getItem('characters')
  return character ? JSON.parse(character) : []
}

@Injectable({providedIn: 'root'})

export class DragonballService {
character = signal<Character[]>(loadFormStorage());

saveToLocalStorage = effect(()=>{
  //console.log(`Character count ${this.character().length}`)
  localStorage.setItem('characters', JSON.stringify(this.character()));
})

CharacterAddComponent(Character: Character){
  this.character.update(
    list => [... list, Character]
  )
}
}
