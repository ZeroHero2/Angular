import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { DragonballSuperComponent } from '../../../../pages/dragonball-super/dragonball-super.component';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
name = signal('');
power = signal (0);

newCharacter = output<Character>();

addCharacter() {

  const newCharacter: Character ={
    id: Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power()
  }
 //this.character().push(newCharacter);
 //this.character.update((list) => [...list, newCharacter] );
 this.newCharacter.emit(newCharacter)
 this.resetField();
}

resetField(){
  this.name.set(''),
  this.power.set(0)

}
 }
