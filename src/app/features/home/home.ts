import { Component, inject } from '@angular/core';
import { AnimalService } from '../../core/services/animal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  animalService = inject(AnimalService);
  classes = this.animalService.getClasses();
}
