import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTamplateComponent } from './ng-tamplate.component';

describe('NgTamplateComponent', () => {
  let component: NgTamplateComponent;
  let fixture: ComponentFixture<NgTamplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTamplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
