import { Component, OnInit } from '@angular/core';
import {TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	// uses our Todo class - models/Todo.ts
	todos:Todo[];

	// init your services in the constructor
  constructor(private todoService:TodoService) { }

	// lifecycle method
  ngOnInit() {
		this.todos = this.todoService.getTodos();
  }

}
