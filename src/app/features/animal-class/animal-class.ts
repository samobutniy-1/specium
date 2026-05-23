import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../core/services/animal';
import { AnimalCard } from '../../shared/components/animal-card/animal-card';
import { BackButton } from '../../shared/components/back-button/back-button';

@Component({
  selector: 'app-animal-class',
  imports: [AnimalCard, BackButton],
  templateUrl: './animal-class.html',
  styleUrl: './animal-class.css',
})
export class AnimalClass {
  route = inject(ActivatedRoute);
  classId = this.route.snapshot.paramMap.get('id');
  animalService = inject(AnimalService);
  animals = this.animalService.getAnimalsByClass(this.classId!);
  currentClass = this.animalService.getClasses().find((c) => c.id === this.classId);

  // selected filter by animal group (null = show all)
  selectedOrder = signal<string | null>(null);

  filteredAnimals = computed(() => {
    if (!this.selectedOrder()) {
      return this.animals;
    }
    return this.animals.filter((animal) => animal.orderCommonName === this.selectedOrder());
  });

  // unique list of animal groups for filter buttons
  orders = [...new Set(this.animals.map((animal) => animal.orderCommonName))];
}
