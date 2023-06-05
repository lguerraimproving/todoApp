import { Component, OnInit } from '@angular/core';
import { TodoService } from './todos/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'todoApp';



  constructor(private todoService:TodoService) {

    todoService.loadFromLocalStorage();

  }


  public sidebarItems=[
    {label:'Todos', icon:'search',url:'./todos'}
  ]


}
