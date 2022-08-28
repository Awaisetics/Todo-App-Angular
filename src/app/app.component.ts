import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    { id : 1 , task : 'Task 1' , completed : false},
    { id : 2 , task : 'Task 2' , completed : true},
    { id : 3 , task : 'Task 3' , completed : true},
    { id : 4 , task : 'Task 4' , completed : false},
    { id : 5 , task : 'Task 5' , completed : false},
  ];

  todoID : number = 6 ;

  addNewTodoItem(todoTask : string){
    this.todos.push( { id : this.todoID , task : todoTask , completed : false } );
    this.todoID++;
  }

  changeStatus(e : {id : number , status : boolean}){
    this.todos.forEach(todo => {
     if (todo.id === e.id) {
        todo.completed = e.status;
     }
    });
  }

  removeTodo(id : number){
    const newArr = this.todos.filter( todo => todo.id !== id );
    this.todos = newArr;
  }

  updateTodo(e: { todoID: number, updatedValue: string }){
    this.todos.forEach( todo => {
      if (todo.id === e.todoID) {
        todo.task = e.updatedValue;
      }
    });
  }
}

