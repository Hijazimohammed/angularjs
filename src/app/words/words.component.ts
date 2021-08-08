import { Words } from './../mock-word';
import { MessageService } from './../message.service';
import { WordService } from './../word.service';
import { Word } from './../word';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  words: Word[] = [];


  getWords(): void {
    this.wordService.getWords().subscribe(words => this.words = words);

  }
  add(text: string, happy: boolean): void {
    text = text.trim();
    if (!text) { return; }
    this.wordService.addWord({ text, happy } as Word)
      .subscribe(
        word => {
          this.words.push(word)
        }
      )
  }

  delete(word: Word): void {
    this.words = this.words.filter(w => w !== word);
    this.wordService.deleteWord(word).subscribe();
  }
  constructor(private wordService: WordService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getWords()
  }

}
