import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';
import { Priority } from '../../interfaces/priority.type';

@Component({
  selector: 'todos-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public dataSource:Todo[]=[];
  displayedColumns: string[] = ['description', 'dueDate', 'priority'];
  priorities:string[]=['Low','Medium','High'];

  constructor(private todoService:TodoService) {


  }
  ngOnInit(): void {

    this.dataSource=this.todoService.todos;


  }

  filterTodos(description:string, priority:Priority){

    this.todoService.filterTodos(description,priority);
    this.dataSource=this.todoService.todos;

  }




}
