import { Component } from '@angular/core';
import { computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {
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
}
