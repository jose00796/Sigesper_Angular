import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepososComponent } from './reposos.component';

describe('RepososComponent', () => {
  let component: RepososComponent;
  let fixture: ComponentFixture<RepososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
