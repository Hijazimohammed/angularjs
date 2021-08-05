
import { Component, OnInit ,Input} from '@angular/core';
import { Word } from './../word';
@Component({
  selector: 'app-words-details',
  templateUrl: './words-details.component.html',
  styleUrls: ['./words-details.component.css']
})
export class WordsDetailsComponent implements OnInit {

  @Input()
  word!: Word;
  constructor( ){ }

  ngOnInit(): void {
  }

}
