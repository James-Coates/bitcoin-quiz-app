import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ResultsComponent } from './components/results/results.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { QuestionsComponent } from './components/questions/questions.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
];

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent, WelcomeComponent, QuestionsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
