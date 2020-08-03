const initialState = {

};

const reducers = {

};

const defaultReducer = (state) => state;

export default function UserInterfaceReducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
