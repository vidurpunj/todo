import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";
import { AddTodoComponent } from "./MyComponent/add-todo/add-todo.component";
import { HeaderComponent } from "./components/partials/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent, AddTodoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
