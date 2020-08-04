import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  fontWeight: 300,
  fontSize: '1.2rem',
});

const InputPlaceholder = () => (
  <Wrapper>
    메모를 입력하세요...
  </Wrapper>
);

export default InputPlaceholder;
