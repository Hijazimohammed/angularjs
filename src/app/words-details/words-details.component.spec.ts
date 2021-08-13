import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDetailsComponent } from './words-details.component';



describe('WordsDetailsComponent', () => {
  let component: WordsDetailsComponent;
  let fixture: ComponentFixture<WordsDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordsDetailsComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '1';
                }
              }
            }
          }
        }
      ]
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
