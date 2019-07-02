import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../../../services/questions.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public quizList: Quiz[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(data => {
      console.log(data);
      this.quizList = data;
    });
  }

  ngOnInit() {}
}
