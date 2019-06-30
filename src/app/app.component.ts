import { Component, NgModule } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { Quiz, Answers, Choice } from './models/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule()
export class AppComponent {
  constructor() {}
}
