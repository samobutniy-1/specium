import { Component, input } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-card',
  imports: [],
  templateUrl: './animal-card.html',
  styleUrl: './animal-card.css',
})
export class AnimalCard {
  animal = input<Animal>();
}
