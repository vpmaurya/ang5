import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegTableComponent } from './seg-table.component';

describe('SegTableComponent', () => {
  let component: SegTableComponent;
  let fixture: ComponentFixture<SegTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
