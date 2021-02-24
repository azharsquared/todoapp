import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input()
  todoName: string;

  @Output()
  todoDeleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.todoDeleteEvent.emit(this.todoName);
  }
}
