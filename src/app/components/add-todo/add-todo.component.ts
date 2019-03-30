import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
	// any because it doesn't have an ID, thus not formatted according to our model
	@Output() addTodo: EventEmitter<any> = new EventEmitter();

	// form inputs should be assigned as properties to components
	title: string;

  constructor() { }

  ngOnInit() {
  }

	onSubmit() {
		// construct the new todo
		const todo = {
			// because our input is bound to the class property
			title: this.title,
			completed: false
		}

		this.addTodo.emit(todo);
	}

}
