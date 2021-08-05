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
  words!:Word[];
  selectedWord!: Word;
  onSelect(word:Word):void{
    this.selectedWord=word;
    this.messageService.add('Words Component : Selected Word id='+word.id)
  }

  getWords():void{
    this.wordService.getWords().subscribe(words => this.words=words);

  }

  constructor(private wordService:WordService ,private messageService:MessageService) { }

  ngOnInit(): void {
    this.getWords()
  }

}
