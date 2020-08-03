import { combineReducers } from 'redux';

import MemoReducer from './memo';
import UserInterfaceReducer from './ui';

export default combineReducers({
  memo: MemoReducer,
  ui: UserInterfaceReducer,
});
