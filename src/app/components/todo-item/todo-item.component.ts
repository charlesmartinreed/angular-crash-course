import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	// this input allows us to utilize our todos in the todoItem html - todo is an input with a type of Todo class.
	@Input() todo: Todo;

  constructor(private todoService:TodoService) { }

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
		// toggle in UI
		todo.completed = !todo.completed;
		// toggle on server
		this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
	}

	onDelete(todo) {
		console.log('deleted');
	}

}
