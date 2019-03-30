import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

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
		// can't use this code with an http get, since that gives us an Observable (think promises)
		// this.todos = this.todoService.getTodos();

		// subscribe to the observable, a data stream
		// similar to .then()
		this.todoService.getTodos().subscribe(todos => {
			this.todos = todos;
		});
  }

	deleteTodo(todo:Todo) {
		// update the UI
		this.todos = this.todos.filter(t => t.id !== todo.id);

		// make a delete request to the API service
		this.todoService.deleteTodo(todo).subscribe();
	}

}
