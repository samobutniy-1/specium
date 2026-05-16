import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalClass } from './animal-class';

describe('AnimalClass', () => {
  let component: AnimalClass;
  let fixture: ComponentFixture<AnimalClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalClass],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
