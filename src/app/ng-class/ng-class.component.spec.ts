import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCLassComponent } from './ng-class.component';

describe('NgCLassComponent', () => {
  let component: NgCLassComponent;
  let fixture: ComponentFixture<NgCLassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCLassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCLassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
