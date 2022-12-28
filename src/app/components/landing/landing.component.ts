import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  todoList: ToDo[] = [];
  todoDetail = {};

  constructor() { }

  ngOnInit(): void {
  }

  getTodoList(todo: ToDo) {
    this.todoList.push(todo)
  }

  getDetail(todo: ToDo) {
    this.todoDetail = todo;
  }

}

export interface ToDo {
  title?: String,
  description?: String
}