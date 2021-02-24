import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-body',
  templateUrl: './todo-list-body.component.html',
  styleUrls: ['./todo-list-body.component.css']
})
export class TodoListBodyComponent implements OnInit {

  appName = 'Todo App';
  defaultText = "Add your new todo";
  //tasks: Array<string> =[];
  tasks = new Set();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(task: any){
    this.tasks.add(task);
  }

  deleteCard(e: string){
    this.tasks.delete(e);
  }

  clearAll(){
    this.tasks.clear();
  }
}
