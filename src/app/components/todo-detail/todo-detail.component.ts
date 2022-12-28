import { Component, OnInit, Input} from '@angular/core';
import { ToDo } from '../landing/landing.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() todoData: ToDo = {}

  constructor() { }

  ngOnInit(): void {
  }

}
