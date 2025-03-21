import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export default function Input({ onEditComplete, defaultValue }) {
  const inputRef = useRef(null);

  const handleBlur = () => {
    onEditComplete?.(inputRef.current);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete?.(inputRef.current);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0px 4px;
  border-radius: 2px;
  background: ${COLOR.BLACK};
  border: none;
  color: ${COLOR.LIGHT_GRAY};
  gap: 10px;
  &:focus {
    outline: none;
  }
`;
