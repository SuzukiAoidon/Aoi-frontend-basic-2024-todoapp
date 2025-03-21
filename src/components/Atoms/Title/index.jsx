import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import styled from "styled-components";
import React from "react";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L};
  font-family: ${FONTFAMILY.NOTO_SANS};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
  }
`;
