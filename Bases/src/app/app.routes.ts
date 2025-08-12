import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';

export const routes: Routes = [{
  path: 'hero-page',
  component: HeroPageComponent
  }
];
