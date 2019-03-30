// injectable allows us to inject this into a class as a component
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

// import the http module so we can connect to a external backend
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
	todosLimit: string = '?_limit=5';

	// in order to use our http module, we have to inject it
  constructor(private http:HttpClient) { }

	// GET TODOS
	getTodos():Observable<Todo[]> {
		// make a get request to JSONPlaceholder API, as a Todo
		return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
	}

	// TOGGLE COMPLETED - PUT
	toggleCompleted(todo: Todo):Observable<any> {
		const url = `${this.todosUrl}/${todo.id}`;

		return this.http.put(url, todo, httpOptions);
	}

	// DELETE TODO - DELETE
	deleteTodo(todo: Todo):Observable<Todo> {
		const url = `${this.todosUrl}/${todo.id}`;

		return this.http.delete<Todo>(url, httpOptions);
	}
}
