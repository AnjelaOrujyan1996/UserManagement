import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneConstructorComponent } from './zone-constructor.component';

describe('ZoneConstructorComponent', () => {
  let component: ZoneConstructorComponent;
  let fixture: ComponentFixture<ZoneConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
