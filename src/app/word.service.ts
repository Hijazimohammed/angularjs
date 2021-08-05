import { MessageService } from './message.service';
import { Word } from './word';
import { Words } from './mock-word';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private messageService:MessageService) { }

  getWords(): Observable <Word[]>{
    this.messageService.add('WordService :fetched words')
    return of(Words)
  }
}
