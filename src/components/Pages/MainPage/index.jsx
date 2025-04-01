import React from "react";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";

export const MainPage = () => {
  return (
    <StyledPageWrapper>
      <Title />
      <TodoCard />
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 60px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`;
