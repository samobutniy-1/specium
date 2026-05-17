import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../core/services/animal';

@Component({
  selector: 'app-animal-class',
  imports: [],
  templateUrl: './animal-class.html',
  styleUrl: './animal-class.css',
})
export class AnimalClass {
  route = inject(ActivatedRoute);
  classId = this.route.snapshot.paramMap.get('id');
  animalService = inject(AnimalService);
  animals = this.animalService.getAnimalsByClass(this.classId!);
  currentClass = this.animalService.getClasses().find((c) => c.id === this.classId);
}
