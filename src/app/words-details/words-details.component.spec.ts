import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDetailsComponent } from './words-details.component';

describe('WordsDetailsComponent', () => {
  let component: WordsDetailsComponent;
  let fixture: ComponentFixture<WordsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
