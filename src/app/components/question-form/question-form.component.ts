import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Question } from '../../models/quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() question: Question;
  @Input() currentQuestionIndex: number;
  @Output() onChoiceMade = new EventEmitter<string>();

  private form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });
    console.log(this.currentQuestionIndex);
    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}
