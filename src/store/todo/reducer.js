import cloneDeep from 'lodash/cloneDeep';

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
} from './types';

const INITIAL_STATE = [];

const todoReducer = (state = INITIAL_STATE, action) => {
  let result = state;
  switch(action.type) {
    case ADD_TODO:
      result = [
        ...state,
        {
          todo: action.payload.todo,
          completed: false
        }
      ];
      break;
    case TOGGLE_COMPLETED:
      result = cloneDeep(state);
      console.log(action.payload);
      result[action.payload.index] = {...result[action.payload.index], completed: !action.payload.todo.completed};
      break;
    case REMOVE_TODO:
      result = cloneDeep(state);
      delete result[action.payload.index];
      break;
    default:
      result = INITIAL_STATE;
      break;
  }
  return result;
}

export default todoReducer;