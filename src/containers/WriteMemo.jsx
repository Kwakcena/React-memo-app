import React from 'react';
import { InputPlaceholder, WhiteBox } from '../components/WriteMemo/index';
import { InputSet, SaveButton } from '../components/Shared';

export default function WriteMemo() {
  return (
    <WhiteBox>
      {/* <InputPlaceholder /> */}
      <InputSet />
      <SaveButton />
    </WhiteBox>
  );
}
