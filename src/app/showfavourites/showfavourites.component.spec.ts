import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfavouritesComponent } from './showfavourites.component';

describe('ShowfavouritesComponent', () => {
  let component: ShowfavouritesComponent;
  let fixture: ComponentFixture<ShowfavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
