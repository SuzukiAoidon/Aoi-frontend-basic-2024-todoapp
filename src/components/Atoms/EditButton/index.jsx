import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = () => {
  return (
    <StyledButton onClick={() => console.log("clicked")}>
      <img src={pencil} alt="pencil" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${COLOR.GREEN_TRANSPARENT};

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
