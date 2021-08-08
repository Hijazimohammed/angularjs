import { WordService } from './../word.service';
import { Word } from './../word';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  words:Word[]=[];

  constructor(private wordService:WordService) { }

  getWords():void{
    this.wordService.getWords().subscribe(words => this.words = words.slice(0,7));
  }
  ngOnInit(): void {
    this.getWords()
  }

}
