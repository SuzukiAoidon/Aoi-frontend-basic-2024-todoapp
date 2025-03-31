import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <img src={plus} alt="AddTaskButton" />
      <StyledText>タスクの追加</StyledText>
    </StyledAddTaskButton>
  );
};

const StyledAddTaskButton = styled.button`
  display: flex;
  align-items: center;
  width: 126px;
  height: 24px;
  background-color: ${COLOR.GREEN_TRANSPARENT};
  gap: 10px;
  padding: 2px 6px;
  border: none;
  border-radius: 12px;
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const StyledText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
