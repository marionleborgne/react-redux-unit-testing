import {
  DEFAULT_TODO_ID,
  DEFAULT_TODO_TEXT,
  DEFAULT_TODO_IS_DONE
} from "../constants";

export const defaultTodos = [
  {
    text: DEFAULT_TODO_TEXT,
    id: DEFAULT_TODO_ID,
    done: DEFAULT_TODO_IS_DONE
  }
];

const todos = (state = defaultTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          done: action.done
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state
  }
};

export default todos;
