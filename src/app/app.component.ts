import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// recommended to use typescript
	name: string = "Charles Martin Reed";

	// because TS is strongly typed, this generates an error
	// name: string = 12;

	// we can also add methods inside of the component
	constructor() {
		this.changeName('Billy Blanks');
		// executes as soon as the component loads
		// console.log(this.name);
		// console.log(123);
	}

	// :void is optional; means that the function doesn't return
	changeName(name: string):void {
		this.name = name;
	}
}
