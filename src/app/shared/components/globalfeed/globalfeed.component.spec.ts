import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalfeedComponent } from './globalfeed.component';

describe('GlobalfeedComponent', () => {
  let component: GlobalfeedComponent;
  let fixture: ComponentFixture<GlobalfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
