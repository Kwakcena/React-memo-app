import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Textarea from 'react-textarea-autosize';

const TitleInput = styled.input({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontWeight: '500',
  fontSize: '1.25rem',
});

const StyledTextArea = styled(Textarea)`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  resize: none;
`;

export default function InputSet({ onChange, title, body }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TitleInput
        name="title"
        onChange={onChange}
        placeholder="제목"
        innerRef={inputRef}
        value={title}
      />
      <StyledTextArea
        minRows={3}
        maxRows={20}
        placeholder="메모를 입력하세요..."
        name="body"
        onChange={onChange}
        value={body}
      />
    </div>
  );
}
