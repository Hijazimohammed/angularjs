import { WordService } from './../word.service';
import { Word } from './../word';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {

  words$!: Observable<Word[]>;
  private searchTerms = new Subject<string>();

  constructor(private wordService: WordService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.words$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.wordService.searchWords(term))

    )

  }

}
