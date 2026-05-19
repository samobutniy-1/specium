import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-card',
  imports: [RouterLink],
  templateUrl: './animal-card.html',
  styleUrl: './animal-card.css',
})
export class AnimalCard {
  animal = input<Animal>();
}
