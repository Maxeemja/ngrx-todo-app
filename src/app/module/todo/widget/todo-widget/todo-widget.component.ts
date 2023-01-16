import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.reducer';
import {
  todoCreateAction,
  todoDeleteAction,
  todoEditAction,
  todoToggleAction,
} from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo';
import { TodoSyncService } from '../../service/todo-sync.service';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {
  
  todoList$: Observable<Todo[]> = this.store$.select(todoListSelector);

  constructor(
    private readonly store$: Store<TodoState>,
    private service: TodoSyncService
  ) {}

    ngOnInit(): void {
      this.service.init();
    }

  onCreate(name: string) {
    console.log(name);
    this.store$.dispatch(todoCreateAction({ name }));
  }

  onDelete(id: number) {
    this.store$.dispatch(todoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this.store$.dispatch(todoToggleAction({ id }));
  }

  onEdit({ id, name }) {
    this.store$.dispatch(todoEditAction({ id, name }));
  }
}
