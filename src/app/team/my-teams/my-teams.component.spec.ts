import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsComponent } from './my-teams.component';

describe('MyTeamsComponent', () => {
  let component: MyTeamsComponent;
  let fixture: ComponentFixture<MyTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTeamsComponent]
    });
    fixture = TestBed.createComponent(MyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
