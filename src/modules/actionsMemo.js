import { postMemo } from '../lib/web-api';

import { resetInput, blurInput } from './actionsUi';

export function createMemo() {
  return async (dispatch, getState) => {
    const { ui: { write: { title, body } } } = getState();
    await postMemo({ title, body });
    dispatch(resetInput());
    dispatch(blurInput());
  };
}

export function xxx() {
  // TODO;
}
