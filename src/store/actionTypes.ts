// best practice to name enum action
// ReducerNameActionTypes = {action = actionName/action}
// redux-toolkit don't need to set the action types/action creators, it do it under the hood

export enum ReducerActionTypes {
  increment = 'countReducer/increment',
  decrement = 'countReducer/decrement',
  randomPlus = 'countReducer/randomPlus',
}
