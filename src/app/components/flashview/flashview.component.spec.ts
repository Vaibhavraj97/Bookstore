import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashviewComponent } from './flashview.component';

describe('FlashviewComponent', () => {
  let component: FlashviewComponent;
  let fixture: ComponentFixture<FlashviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
