import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { AppComponent } from './app.component';
import { CounterComponent } from './pages/counter/counter.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

export const routes: Routes = [
  {
path: 'dragonball',
component:DragonballComponent
  },
  {
    path:'',
    component: CounterComponent
  },
  {
  path: 'hero-page',
  component: HeroPageComponent
  }
];
