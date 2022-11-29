import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentosComponent } from './conhecimentos.component';

describe('ConhecimentosComponent', () => {
  let component: ConhecimentosComponent;
  let fixture: ComponentFixture<ConhecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConhecimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConhecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
