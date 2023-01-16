import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { todoLoadState } from '../store/todo/todo.actions';
import { TodoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todo.selectors';


export const TODO_LOCALSTORAGE_KEY = 'todo'

@Injectable({
  providedIn: 'root',
})
export class TodoSyncService {
  private isInit = false

  constructor(private store$: Store<TodoState>) {}

  init() {
    if(this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store$.select(todoFeatureSelector).pipe(filter(state => !!state)).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state))
    })

    window.addEventListener('storage', () => this.loadFromStorage())
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if(storageState) {
      this.store$.dispatch(todoLoadState({state: JSON.parse(storageState)}))
    }
  }
}
