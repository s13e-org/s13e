import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideCard } from './styleguide-card';

describe('StyleguideCard', () => {
  let component: StyleguideCard;
  let fixture: ComponentFixture<StyleguideCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleguideCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleguideCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
