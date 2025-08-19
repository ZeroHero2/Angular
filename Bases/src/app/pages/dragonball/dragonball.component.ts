import { Component, computed, signal } from '@angular/core';
import { sign } from 'crypto';

interface Character{
  id:number;
  name:string;
  power:number;
}
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss'
})


export class DragonballComponent {
name = signal('Gohan');
power = signal(100);

character = signal<Character[]>([
  {id:1, name:'Goku', power:9001},
  {id:2, name:'Vegeta', power:7500},
  {id:3, name:'Piccolo', power:4800},
  {id:4, name:"Yamcha", power:500}
]);

addCharacter(){
  const newCharacter: Character ={
    id: this.character().length,
    name: this.name(),
    power: this.power()
  }
 //this.character().push(newCharacter);
 this.character.update((list) => [...list, newCharacter] );
 this.resetField();
}
resetField(){
  this.name.set(''),
  this.power.set(0)
}
}
