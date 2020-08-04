import React from 'react';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 600px)',
]);

const Wrapper = styled.div({
  paddingTop: '60px',
});

const Layout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Layout.Main = styled.div(mq({
  margin: '0 auto',
  transition: 'all .3s',
  position: 'relative',
  width: ['1200px', '990px', 'calc(100% - 2rem)', 'calc(100% - 1rem)'],
  marginTop: ['2rem', '2rem', '1rem', '0.5rem'],
}));

export default Layout;
