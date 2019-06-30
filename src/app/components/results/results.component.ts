import { Component, OnInit, Input } from '@angular/core';
import { Answers } from '../../models/quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() answers: Answers;

  constructor() {}

  ngOnInit() {}
}
