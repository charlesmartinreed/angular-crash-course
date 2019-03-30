import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';


// we need to import our routes, then add them to the routes array
const routes: Routes = [
	{ path: '', component: TodosComponent },
	{ path: 'about', component: AboutComponent}
];

// then, in the main app component html we add <router-outlet>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
