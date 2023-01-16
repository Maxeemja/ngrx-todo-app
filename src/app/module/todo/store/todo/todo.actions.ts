import {Action,  createAction,  props} from "@ngrx/store";




export const todoCreateAction = createAction(
  '[TODO] Create Item',
  props<{name: string}>()
)

export const todoDeleteAction = createAction(
  '[TODO] Delete Item',
  props<{id: number}>()
)

export const todoToggleAction = createAction(
  '[TODO] Toggle Item',
  props<{id: number}>()
)

export const todoEditAction = createAction(
  '[TODO] Edit Item',
  props<{id: number, name: string}>()
)

// export class TodoCreateAction implements Action {
//   readonly type = todoActionsType.create
//   constructor(public payload: {name: string}) {
//
//   }
// }
