export function changeInput({ name, value }) {
  return {
    type: 'changeInput',
    payload: { name, value },
  };
}

export function resetInput() {
  return {
    type: 'resetInput',
  };
}

export function focusInput() {
  return {
    type: 'focusInput',
  };
}

export function blurInput() {
  return {
    type: 'blurInput',
  };
}
