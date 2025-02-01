import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = () => {
  return <StyledButton onClick={() => console.log("clicked")} />;
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background: url(${pencil}) no-repeat center/contain;

  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
