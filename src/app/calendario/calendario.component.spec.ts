import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioComponent } from './calendario.component';

describe('calendarioComponent', () => {
  let component: CalendarioComponent;
  let fixture: ComponentFixture<CalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*Hola*/ 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
