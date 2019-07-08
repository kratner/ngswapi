import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { peopleListComponent } from './people-list.component';

describe('peopleListComponent', () => {
  let component: peopleListComponent;
  let fixture: ComponentFixture<peopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ peopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(peopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
