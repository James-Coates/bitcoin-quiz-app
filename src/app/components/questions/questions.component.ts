import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quiz, Question, Answers, Choice } from '../../models/quiz.model';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public answers: Answers;
  public quiz: Quiz;
  public questions: Question[];
  public currentQuestionIndex: number;
  public showResults = false;

  // Inject the active route and questions service
  constructor(public route: ActivatedRoute, public questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuestions(this.route.snapshot.params.quizId).subscribe(questions => {
      this.questions = questions;
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }
    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }
}
