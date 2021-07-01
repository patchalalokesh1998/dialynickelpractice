import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommunitycardComponent } from './mycommunitycard.component';

describe('MycommunitycardComponent', () => {
  let component: MycommunitycardComponent;
  let fixture: ComponentFixture<MycommunitycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycommunitycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycommunitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
