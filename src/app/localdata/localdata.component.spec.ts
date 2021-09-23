import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldataComponent } from './localdata.component';

describe('LocaldataComponent', () => {
  let component: LocaldataComponent;
  let fixture: ComponentFixture<LocaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
