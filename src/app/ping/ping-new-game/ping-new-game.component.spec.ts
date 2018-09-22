import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingNewGameComponent } from './ping-new-game.component';

describe('PingNewGameComponent', () => {
  let component: PingNewGameComponent;
  let fixture: ComponentFixture<PingNewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingNewGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
