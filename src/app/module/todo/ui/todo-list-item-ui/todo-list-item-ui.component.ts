import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss']
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }
  
  @Output()
  delete = new EventEmitter()

  @Output()
  toggle = new EventEmitter()
  
  @Output()
  edit = new EventEmitter()


  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event) {
    event.preventDefault()
    this.toggle.emit()
  }

}
