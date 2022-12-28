import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../landing/landing.component';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  @Input() todo: ToDo = {};
  @Output() itemDetail = new EventEmitter<ToDo>()

  constructor() { }

  ngOnInit(): void {
  }

  getToDo(todo: ToDo) {
    this.itemDetail.emit(todo);
  }

}
