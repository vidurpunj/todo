import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title!: string;
desc!: string;

@Output() addTodo: EventEmitter<Todo> = new EventEmitter();
constructor(){}

ngOnInit(): void {}

handleSubmit(){
  console.log("Add new todo..");
  const newTodo: Todo = {
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true
  }
  this.addTodo.emit(newTodo);
  console.log("Add new todo emit..");
}

}
