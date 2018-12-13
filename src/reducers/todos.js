const defaultState = [
  {
    text: 'Create Redux example',
    id: Date.now(),
    done: true
  }
];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
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
