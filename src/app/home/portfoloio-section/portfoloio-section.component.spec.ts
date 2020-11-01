import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoloioSectionComponent } from './portfoloio-section.component';

describe('PortfoloioSectionComponent', () => {
  let component: PortfoloioSectionComponent;
  let fixture: ComponentFixture<PortfoloioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoloioSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoloioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
