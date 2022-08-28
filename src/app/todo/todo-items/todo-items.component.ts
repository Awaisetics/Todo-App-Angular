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

  editContainerOpened : boolean = false;

  checkBoxChanged(id : number , e : any){
    this.onStatusChange.emit({id , status : e.target.checked})
  }

  removeTodo(id : number){
    this.onRemoveTodo.emit(id);
  }

  updateTodo(todoID : number , e : any){
    const updatedValue: string = e.target.previousElementSibling.value;
    this.onUpdateTodo.emit({todoID , updatedValue});
    this.toggleEditContainer();
  }

  toggleEditContainer(){
    this.editContainerOpened ? this.editContainerOpened = false : this.editContainerOpened = true;
  }
  
}
