import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public getQuizzes() {
    return this.http.get('../../assets/quiz-list.json').pipe(
      map((result: any[]) => {
        return result.map(
          r => new Quiz(r.label, r.name, r.description, r.filename)
        );
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`../assets/${fileName}`).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }
}
