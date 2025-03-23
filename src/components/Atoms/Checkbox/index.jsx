import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

export const Checkbox = () => {
  return (
    <StyledButton onClick={() => console.log("clicked.")}>
      <StyledImg src={check} alt="checked" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover img {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  transition: all 0.2s ease;
  opacity: 0;
  width: 100%;
  height: 100%;
`;
