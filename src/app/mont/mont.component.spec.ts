import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontComponent } from './mont.component';

describe('MontComponent', () => {
  let component: MontComponent;
  let fixture: ComponentFixture<MontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
