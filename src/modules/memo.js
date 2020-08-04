import {
  postMemo,
} from '../lib/web-api';

const initialState = {

};

const reducers = {

};

const defaultReducer = (state) => state;

export default function MemoReducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
