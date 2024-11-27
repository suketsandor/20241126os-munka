import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EladoMotorokComponent } from './elado-motorok.component';

describe('EladoMotorokComponent', () => {
  let component: EladoMotorokComponent;
  let fixture: ComponentFixture<EladoMotorokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EladoMotorokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EladoMotorokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
