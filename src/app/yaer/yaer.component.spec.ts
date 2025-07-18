import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaerComponent } from './yaer.component';

describe('YaerComponent', () => {
  let component: YaerComponent;
  let fixture: ComponentFixture<YaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YaerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
