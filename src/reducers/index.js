import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };//END  case types.SUBMIT_TODO

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
      };//END case types.DELETE_TODO

    default:
      return state;
  }
};

export default reducer;

