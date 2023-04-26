import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamportalComponent } from './teamportal.component';

describe('TeamportalComponent', () => {
  let component: TeamportalComponent;
  let fixture: ComponentFixture<TeamportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamportalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
