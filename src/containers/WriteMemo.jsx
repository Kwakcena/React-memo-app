import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useOutsideClick from '../lib/useOutsideClick';
import { InputPlaceholder, WhiteBox } from '../components/WriteMemo/index';
import { InputSet, SaveButton } from '../components/Shared';

import {
  changeInput,
  focusInput,
  blurInput,
} from '../modules/actionsUi';

export default function WriteMemo() {
  const ref = useRef();
  const dispatch = useDispatch();

  const {
    ui: {
      write: { focused, title, body },
    },
  } = useSelector((state) => state);

  function handleChange({ name, value }) {
    dispatch(changeInput({ name, value }));
  }

  useOutsideClick(ref, () => {
    if (focused) {
      if (title !== '' || body !== '') return;
      dispatch(blurInput());
    }
  });

  function handleFocus() {
    if (!focused) {
      dispatch(focusInput());
    }
  }

  return (
    focused ? (
      <WhiteBox ref={ref}>
        <InputSet
          onChange={handleChange}
          title={title}
          body={body}
        />
        <SaveButton />
      </WhiteBox>
    ) : (
      <WhiteBox ref={ref} onClick={handleFocus}>
        <InputPlaceholder />
      </WhiteBox>
    )
  );
}
