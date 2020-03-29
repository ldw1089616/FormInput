import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCalanderComponent } from './personal-calander.component';

describe('PersonalCalanderComponent', () => {
  let component: PersonalCalanderComponent;
  let fixture: ComponentFixture<PersonalCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
