import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 1 message', () => {
    service.add('test');
    expect(service.messages.length).toEqual(1);
  });

  it('should have no message', () => {
    expect(service.messages.length).toEqual(0);
  });

  it('should have 1 message called test', () => {
    service.add('test');
    expect(service.messages).toEqual(['test']);
  });

  it('should have no message after Clear()', () => {
    service.clear();
    expect(service.messages.length).toEqual(0);
  });

  it('should add 2 messages and have no message after Clear()', () => {
    service.add('message 1')
    service.add('message 2')
    expect(service.messages.length).toEqual(2)
    service.clear();
    expect(service.messages.length).toEqual(0);
  });
});
