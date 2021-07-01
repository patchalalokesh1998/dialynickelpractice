import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingcardComponent } from './ratingcard.component';

describe('RatingcardComponent', () => {
  let component: RatingcardComponent;
  let fixture: ComponentFixture<RatingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
