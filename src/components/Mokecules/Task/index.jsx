import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../../Atoms/Checkbox";
import { Input } from "../../Atoms/Input";
import { EditButton } from "../../Atoms/EditButton";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    onTaskNameChange(value);
    setIsEditing(false); //ここに問題あり
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>

      {isEditing && (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      )}
      {!isEditing && (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
`;

const StyledTaskName = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
  width: 20px;
  justify-content: center;
  align-items: center;
`;
