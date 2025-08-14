import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { AppComponent } from './app.component';
import { CounterComponent } from './pages/counter/counter.component';

export const routes: Routes = [
  {
    path:'',
    component: CounterComponent
  },
  {
  path: 'hero-page',
  component: HeroPageComponent
  }
];
