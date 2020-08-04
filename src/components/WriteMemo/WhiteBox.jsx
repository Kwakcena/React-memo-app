import styled from '@emotion/styled';
import oc from 'open-color';
import facepaint from 'facepaint';

const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 600px)',
]);

const WhiteBox = styled.div(mq({
  width: ['700px', '500px', '100%'],
  margin: '0 auto',
  padding: '1rem',
  background: 'white',
  color: `${oc.gray[6]}`,
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
  cursor: 'text',
  '&:hover': {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
}));

export default WhiteBox;
