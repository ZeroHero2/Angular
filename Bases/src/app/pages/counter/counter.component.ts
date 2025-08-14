import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  //imports: [UpperCasePipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

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
