import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // @ts-ignore
  todos: Todo[] ;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // tslint:disable-next-line:typedef
  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  // tslint:disable-next-line:typedef
  addTodo(todo: Todo) {
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.addTodo(todo).subscribe((todo: Todo) => {
      this.todos.push(todo);
    });
  }
}
