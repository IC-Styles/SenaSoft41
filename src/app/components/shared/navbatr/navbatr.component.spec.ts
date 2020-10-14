import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbatrComponent } from './navbatr.component';

describe('NavbatrComponent', () => {
  let component: NavbatrComponent;
  let fixture: ComponentFixture<NavbatrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbatrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
