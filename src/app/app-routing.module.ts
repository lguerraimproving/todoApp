import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todos/pages/todo-list/todo-list.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    component:TodoListComponent
  },
  {
    path:'todos',
    component:TodoListComponent
  },
  {
    path:'**',
    component:NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
