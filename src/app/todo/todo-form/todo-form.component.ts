import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onAdd = new EventEmitter<string>();

  todoTask : string = '';

  addTodo(){
    if (this.todoTask === '') return;
    this.onAdd.emit(this.todoTask);
    this.todoTask = '';
  }

}
