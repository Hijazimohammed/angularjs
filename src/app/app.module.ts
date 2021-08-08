import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { WordsDetailsComponent } from './words-details/words-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WordSearchComponent } from './word-search/word-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    WordsDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    WordSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //Remmeber to remove this when working with real server
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
