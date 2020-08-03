import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';

const Wrapper = styled.div({
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px',
  width: '100%',
  top: '0px',
  zIndex: 5,
  backgroundColor: `${oc.indigo[6]}`,
  color: 'white',
  borderBottom: `1px solid ${oc.indigo[7]}`,
  boxShadow: '0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20)',
  fontSize: '2.5rem',
  fontFamily: 'Baloo, cursive',
});

const Header = () => (
  <Wrapper>
    memo
  </Wrapper>
);

export default Header;
