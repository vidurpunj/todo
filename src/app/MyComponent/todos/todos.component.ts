import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodosComponent {
  localItem: string | null = '';
  todos: Todo[] = [];
  constructor(){
    if(this.localItem == null || this.localItem === ""){
      this.todos = [];
    }else{
      try { 
        this.todos = JSON.parse(this.localItem);
       }
       catch (error) {
         console.error("Error parsing localItem:", error); this.todos = [];
        }
      }
    this.todos = [
      {
      sno: 1,
      title: "Fist Title",
      desc: "This is Desc",
      active: true
      },
      {
        sno: 2,
        title: "Second Title",
        desc: "This is Desc",
        active: true
      },
      {
        sno: 3,
        title: "Third Title",
        desc: "This is Desc",
        active: true
      },
      {
        sno: 4,
        title: "Fourth Title",
        desc: "This is Desc",
        active: true
      }
    ]
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index  = this.todos.indexOf(todo);
    if (index > -1)
       {
       this.todos.splice(index, 1); localStorage.setItem("todos", JSON.stringify(this.todos));
      }
  }
  
  addTodo(todo: Todo){
    console.log('Add new method is called Todo..');
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
