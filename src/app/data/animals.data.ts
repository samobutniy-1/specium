import { Animal } from '../shared/models/animal.model';

export const ANIMALS: Animal[] = [
  {
    id: 'lion',
    classId: 'mammals',
    name: 'Lion',
    scientificName: 'Panthera leo',
    order: 'Carnivora',
    orderCommonName: 'Carnivores',
    habitat: ['Savanna', 'Grasslands', 'Open Woodlands'],
    size: { min: 1.8, max: 2.1, unit: 'm' },
    weight: { min: 120, max: 250, unit: 'kg' },
    lifespan: { min: 10, max: 14 },
    diet: 'Carnivore',
    conservationStatus: 'Vulnerable',
    shortDescription:
      'The lion is the second-largest cat species in the world, known as the king of the savanna',
    fullDescription:
      'Lions are highly social animals that live in groups called prides. They are apex predators and play a crucial role in maintaining the balance of their ecosystems. Males are distinguished by their iconic manes, which darken with age',
    imageUrl: '',
  },
  {
    id: 'bald-eagle',
    classId: 'birds',
    name: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    order: 'Accipitriformes',
    orderCommonName: 'Eagles & Hawks',
    habitat: ['Forests', 'Rivers', 'Lakes', 'Coasts'],
    size: { min: 0.7, max: 0.96, unit: 'm' },
    weight: { min: 3, max: 6.3, unit: 'kg' },
    lifespan: { min: 20, max: 30 },
    diet: 'Carnivore',
    conservationStatus: 'Least Concern',
    shortDescription:
      'The bald eagle is a bird of prey and the national symbol of the United States',
    fullDescription:
      'Bald eagles are powerful hunters that primarily feed on fish, which they catch by swooping down and snatching from the water with their talons. They build the largest nests of any bird in North America',
    imageUrl: '',
  },
  {
    id: 'nile-crocodile',
    classId: 'reptiles',
    name: 'Nile Crocodile',
    scientificName: 'Crocodylus niloticus',
    order: 'Crocodilia',
    orderCommonName: 'Crocodilians',
    habitat: ['Rivers', 'Lakes', 'Marshes'],
    size: { min: 3.5, max: 5, unit: 'm' },
    weight: { min: 225, max: 750, unit: 'kg' },
    lifespan: { min: 45, max: 70 },
    diet: 'Carnivore',
    conservationStatus: 'Least Concern',
    shortDescription: 'The Nile crocodile is the largest freshwater predator in Africa',
    fullDescription:
      'Nile crocodiles are ancient apex predators that have remained largely unchanged for millions of years. They are highly territorial and can run surprisingly fast on land for short distances. They play a vital role in African river ecosystems',
    imageUrl: '',
  },
];
