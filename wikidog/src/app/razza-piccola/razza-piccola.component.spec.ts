import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazzaPiccolaComponent } from './razza-piccola.component';

describe('RazzaPiccolaComponent', () => {
  let component: RazzaPiccolaComponent;
  let fixture: ComponentFixture<RazzaPiccolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazzaPiccolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazzaPiccolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
