import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add/character-add.component';


@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html'
})

export class DragonballSuperComponent {
name = signal(' ');
power = signal(0);

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
