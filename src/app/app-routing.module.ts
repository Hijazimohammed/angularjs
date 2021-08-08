import { WordsDetailsComponent } from './words-details/words-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WordsComponent } from './words/words.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id',component:WordsDetailsComponent},
  {path:'words',component:WordsComponent},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
