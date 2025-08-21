import { ChangeDetectionStrategy, Component, input} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { DragonballSuperComponent } from '../../../pages/dragonball-super/dragonball-super.component';
//import {Character} from './charac'

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
character = input.required<Character[]>()
listName = input.required<string>();

}
