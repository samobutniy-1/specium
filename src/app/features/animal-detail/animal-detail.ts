import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../core/services/animal';
import { BackButton } from '../../shared/components/back-button/back-button';

@Component({
  selector: 'app-animal-detail',
  imports: [BackButton],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.css',
})
export class AnimalDetail {
  animalService = inject(AnimalService);
  route = inject(ActivatedRoute);
  animalId = this.route.snapshot.paramMap.get('id');
  animal = this.animalService.getAnimalById(this.animalId!);
}
