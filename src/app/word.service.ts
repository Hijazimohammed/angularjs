import { MessageService } from './message.service';
import { Word } from './word';
import { Words } from './mock-word';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private wordUrl = 'api/words';
  private httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
  /*
    getWords(): Observable<Word[]> {
      this.log('fetched words ');
      return of(Words);
    }
  */
  getWords(): Observable<Word[]> {
    this.log('fetched words ')
    return this.http.get<Word[]>(this.wordUrl)
      .pipe(
        tap(_ => this.log('fetched words')),
        catchError(this.handleError<Word[]>("getWords", []))
      );
  }

  /*getWord(id: number): Observable<Word | undefined> {
    this.log('fetched word id =' + id);
    return of(Words.find(word => word.id === id));
  }*/
  getWord(id: number): Observable<Word> {
    this.log('fetched word id =' + id);
    const url = this.wordUrl + "/" + id;
    console.log(this.http.get<Word>(url));
    return this.http.get<Word>(url)
      .pipe(
        tap(_ => this.log('fetched words')),
        catchError(this.handleError<Word>("getWords"))
      );
  }

  updateWord(word:Word):Observable<any>{
    return this.http.put(this.wordUrl,word,this.httpOptions).pipe(
      tap(_=>this.log("updated word id ="+word.id)),
      catchError(this.handleError<any> ("updateWord"))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(operation + " failed " + error.message);
      return of(result as T)
    }
  }

  private log(message: string) {
    this.messageService.add("WordService :" + message);
  }
}
