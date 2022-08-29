import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todos : any = [];
  @Output() onStatusChange = new EventEmitter<{ id: number, status : boolean }>();
  @Output() onRemoveTodo = new EventEmitter<number>();
  @Output() onUpdateTodo = new EventEmitter<{ todoID: number, updatedValue: string}>();

  checkBoxChanged(id : number , e : any){
    this.onStatusChange.emit({id , status : e.target.checked})
  }

  removeTodo(id : number){
    this.onRemoveTodo.emit(id);
  }

  updateTodo(todo : any , e : any){
    const updatedValue: string = e.target.previousElementSibling.value;
    const todoID = todo.id;
    this.onUpdateTodo.emit({ todoID , updatedValue });
    this.toggleEditContainer(todo , false);
  }

  toggleEditContainer(todo : any , status : boolean){
    todo.edit = status;
  }
  
}
