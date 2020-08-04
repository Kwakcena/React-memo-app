const initialState = {
  write: {
    focused: false,
    title: '',
    body: '',
  },
};

const initialWrite = {
  focused: false,
  title: '',
  body: '',
};

const reducers = {
  changeInput(state, { payload: { name, value } }) {
    return {
      ...state,
      write: {
        ...state.write,
        [name]: value,
      },
    };
  },
  resetInput(state) {
    return {
      ...state,
      write: {
        ...initialWrite,
      },
    };
  },
  focusInput(state) {
    return {
      ...state,
      write: {
        ...state.write,
        focused: true,
      },
    };
  },
  blurInput(state) {
    return {
      ...state,
      write: {
        ...state.write,
        focused: false,
      },
    };
  },
};

const defaultReducer = (state) => state;

export default function UserInterfaceReducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
