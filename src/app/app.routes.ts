import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AnimalClass } from './features/animal-class/animal-class';
import { AnimalDetail } from './features/animal-detail/animal-detail';

export const routes: Routes = [
  { path: '', title: 'Specium', component: Home },
  { path: 'class/:id', title: 'Specium', component: AnimalClass },
  { path: 'animal/:id', title: 'Specium', component: AnimalDetail },
  { path: '**', redirectTo: '' },
];
