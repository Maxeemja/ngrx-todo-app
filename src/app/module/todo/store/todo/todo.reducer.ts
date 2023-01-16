import { Todo } from '../../model/todo';
import {
  todoCreateAction,
  todoDeleteAction,
  todoEditAction,
  todoToggleAction,
} from './todo.actions';
import { createReducer, on } from '@ngrx/store';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initState: TodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = createReducer(
  initState,
  on(todoCreateAction, (state, { name }) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    todoList: [
      ...state.todoList,
      {
        id: state.idIncrement,
        name,
        completed: false,
      },
    ],
  })),
  on(todoDeleteAction, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((todo) => todo.id !== id),
  })),
  on(todoToggleAction, (state, { id }) => ({
    ...state,
    todoList: state.todoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    ),
  })),
  on(todoEditAction, (state, { id, name }) => ({
    ...state,
    todoList: state.todoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            name,
          }
        : todo
    ),
  }))
);

// TODO: don't do like that
// export const todoReducer = (state = initState, action: TodoActions) => {
//   switch (action.type) {
//     case todoActionsType.create:
//       return {
//         ...state,
//         idIncrement: state.idIncrement + 1,
//         todoList: [
//           ...state.todoList,
//           {
//             id: state.idIncrement,
//             name: action.payload.name,
//             completed: false
//           }
//         ]
//       }
//     default:
//       return state;
//   }
// }
