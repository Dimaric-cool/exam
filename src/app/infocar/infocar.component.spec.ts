import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocarComponent } from './infocar.component';

describe('InfocarComponent', () => {
  let component: InfocarComponent;
  let fixture: ComponentFixture<InfocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
