import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // @ts-ignore
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses(): { todo: true; 'is-completed': boolean } {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    // @ts-ignore
    return classes;
  }

  // onToggle
  onToggle(todo: Todo): void {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle in Server
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe();
  }

  // onDelete
  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}


