import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './routes';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditUiComponent } from './ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoListItemEditUiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
})
export class TodoModule {}
