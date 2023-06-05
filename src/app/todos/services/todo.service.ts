import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { todoList } from 'src/app/data/data';
import { Priority } from '../interfaces/priority.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  public todos:Todo[]=[];

  constructor() {
    this.loadFromLocalStorage();
   }


  public saveToLocalStorage(){
    localStorage.setItem('todoStore',JSON.stringify(this.todos));
  }

  public loadFromLocalStorage(){
    if(!localStorage.getItem('todoStore'))
    {
      this.todos=todoList;
      this.saveToLocalStorage();
    }

    this.todos=JSON.parse(localStorage.getItem('todoStore')!);
  }

  public filterTodos(description:string, priority:Priority){

    console.log({description});
    this.todos=todoList;

    this.todos= this.todos.filter(t=> (t.description.includes(description) || !description) && (t.priority.includes(priority) || !priority ));

  }


}
