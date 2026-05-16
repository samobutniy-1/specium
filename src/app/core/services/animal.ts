import { Injectable } from '@angular/core';
import { ANIMALS } from '../../data/animals.data';
import { ANIMAL_CLASSES } from '../../data/animal-classes.data';
import { Animal, AnimalClass } from '../../shared/models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  getClasses(): AnimalClass[] {
    return ANIMAL_CLASSES;
  }
  getAnimals(): Animal[] {
    return ANIMALS;
  }
  getAnimalsByClass(classId: string) {
    return ANIMALS.filter((animal) => animal.classId === classId);
  }
  getAnimalById(id: string) {
    return ANIMALS.find((animal) => animal.id === id);
  }
}
