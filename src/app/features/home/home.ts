import { Component, inject } from '@angular/core';
import { AnimalService } from '../../core/services/animal';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  animalService = inject(AnimalService);
  classes = this.animalService.getClasses();
}
