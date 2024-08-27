import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdDashboardComponent } from './od-dashboard.component';

describe('OdDashboardComponent', () => {
  let component: OdDashboardComponent;
  let fixture: ComponentFixture<OdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OdDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
