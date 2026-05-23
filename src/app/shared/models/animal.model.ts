export interface Animal {
  id: string;
  classId: string;
  name: string;
  scientificName: string;
  order: string;
  orderCommonName: string;
  habitat: string[];
  size: { min: number; max: number; unit: string };
  weight: { min: number; max: number; unit: string };
  lifespan: { min: number; max: number };
  diet: string;
  conservationStatus: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
}

export interface AnimalClass {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  backgroundUrl: string;
}
