import { ReducerActionTypes } from './actionTypes';

type TState = {
  count: number;
};

type TAction = {
  type:
    | ReducerActionTypes.decrement
    | ReducerActionTypes.increment
    | ReducerActionTypes.randomPlus;
  payload?: unknown;
};

export const initialState: TState = {
  count: 0,
};

export const countReducer = (
  state: TState = initialState,
  { type, payload }: TAction,
): TState => {
  switch (type) {
    // action type
    case ReducerActionTypes.decrement: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case ReducerActionTypes.increment: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case ReducerActionTypes.randomPlus: {
      const randomNumber = payload as number;

      return {
        ...state,
        count: state.count + randomNumber,
      };
    }

    default:
      return state;
  }
};
