import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./pages/counter/counter.component";
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bases';
}
