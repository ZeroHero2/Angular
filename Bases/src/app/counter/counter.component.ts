import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [UpperCasePipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
// ---- SEÑALES ----
name = signal('ironman')
age = signal(45)

getHeroDescription(){
  return(`superhero es ${this.name().toUpperCase()} y tiene ${this.age()}`)
}
changeHero(){
  this.name.set('Spiderman');
  this.age.set(22);
}
resetForm(){
 this.name.set('ironman');
  this.age.set(45);
}
changeAge(){
  this.age.update((age) => 60)
}

// ---- Señal computada ----
heroDescription = computed(()=>{
  const description = `hero ${this.name()} de edad ${this.age()}`
  return description;
})

counter = 20;
  counterSingal = signal(10)

PlusCounter(value:number){
  this.counter += value ;
  this.counterSingal.update((current)=>current + value)
}
resetCounter(){
  this.counter = 10;
  this.counterSingal.set(10)
}
}
