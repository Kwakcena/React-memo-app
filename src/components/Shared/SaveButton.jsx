import styled from '@emotion/styled';
import oc from 'open-color';
import React from 'react';

const Wrapper = styled.div({
  textAlign: 'right',
});

const Button = styled.div({
  display: 'inline-block',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  color: `${oc.indigo[7]}`,
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 500,
  '&:hover': {
    background: `${oc.gray[1]}`,
  },
  '&:active': {
    background: `${oc.gray[2]}`,
  },
});

export default function SaveButton({ onClick }) {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        완료
      </Button>
    </Wrapper>
  );
}
