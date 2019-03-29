import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	// this input allows us to utilize our todos in the todoItem html - todo is an input with a type of Todo class.
	@Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

	// Set Dynamic Classes
	setClasses() {
		let classes = {
			// set class and the condition under which it is applied
			todo: true,
			'is-complete': this.todo.completed
		}

		return classes;
	}

	// event methods
	onToggle(todo) {
		todo.completed = !todo.completed;
	}

	onDelete(todo) {
		console.log('deleted');
	}

}
