import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjcetDetailsComponent } from './projcet-details.component';

describe('ProjcetDetailsComponent', () => {
  let component: ProjcetDetailsComponent;
  let fixture: ComponentFixture<ProjcetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjcetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjcetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
