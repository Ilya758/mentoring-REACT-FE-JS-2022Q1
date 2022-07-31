import { ReducerActionTypes } from './actionTypes';

// action creators are pure functions, that returns plain js-object, that is ACTION
// Action - the plain js object, contains info ABOUT event, occured in your app
// consists with
// - TYPE, that is string, preferrable to create some enum, where you can extract type and import for corresponding action
// - payload?: any type, add info you want to apply / set etc

export const incrementAction = () => ({ type: ReducerActionTypes.increment });

export const decrementAction = () => ({ type: ReducerActionTypes.decrement });

export const randomPlusAction = (payload: number) => ({
  type: ReducerActionTypes.randomPlus,
  payload,
});
