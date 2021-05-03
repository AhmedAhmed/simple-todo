import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED
} from './types';

export const addTodo = todo => {
  console.log(ADD_TODO);
  return ({
    type: ADD_TODO,
    payload: {todo}
  });
}

export const removeTodo = index => ({
  type: REMOVE_TODO,
  payload: {index}
});
export const toggleCompleted = (todo, index) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    todo,
    index
  }
});