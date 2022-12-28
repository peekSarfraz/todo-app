import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../landing/landing.component';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

@Output() newItemEvent = new EventEmitter<ToDo>();

  todoForm: FormGroup = new FormGroup({
    title: new FormControl(''), 
    description: new FormControl(''), 
  
  }) 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    if(form) {
      this.newItemEvent.emit(form.value);      
    }
    form.reset();
  }
}


