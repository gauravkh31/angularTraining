import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnameComponent } from './dname.component';

describe('DnameComponent', () => {
  let component: DnameComponent;
  let fixture: ComponentFixture<DnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
