import { Word } from './word';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const words=[
      {id:2,text:'raceCar',happy:true},
      {id:3,text:'udemy',happy:true},
      {id:4,text:'eduniox',happy:true},
      {id:5,text:'noon',happy:false},
      {id:6,text:'rotor',happy:true},
      {id:7,text:'roman',happy:false},
      {id:8,text:'Germany',happy:true},
      {id:9,text:'Holandi',happy:false}
    ];
    return {words};
  }
  genId(words:Word[]): number{
    return words.length > 0 ? Math.max(...words.map(word=>word.id))+1:2
  }

  constructor() { }
}
