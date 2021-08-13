import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MessageService } from './message.service';
import { Word } from './word';

import { WordService } from './word.service';


describe('WordService', () => {
  let wordService: WordService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    wordService = new WordService(<any>httpClientSpy, new MessageService)

  })

  it('should return expected words (HttpClient called once)', () => {
    const expectedWord: Word[] = [
      { id: 1, text: 'test', happy: true },
      { id: 2, text: 'racer', happy: false }
    ];

    httpClientSpy.get.and.returnValue(of(expectedWord))
    wordService.getWords().subscribe(
      words => expect(words).toEqual(expectedWord),
      fail
    )
    expect(httpClientSpy.get.calls.count()).toBe(1)
  })
});
