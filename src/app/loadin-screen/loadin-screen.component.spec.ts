import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinScreenComponent } from './loadin-screen.component';

describe('LoadinScreenComponent', () => {
  let component: LoadinScreenComponent;
  let fixture: ComponentFixture<LoadinScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadinScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
