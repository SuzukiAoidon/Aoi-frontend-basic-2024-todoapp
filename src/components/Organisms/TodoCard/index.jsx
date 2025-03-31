import React, { useState } from "react";
import styled from "styled-components";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Mokecules/Task";
import COLOR from "../../../variables/color";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  // タスク追加
  const onAddTaskButtonClick = () => {
    setTaskList((prev) => [...prev, { name: "", initializing: true }]);
  };

  // タスク完了（削除）
  const onTaskComplete = (index) => {
    setTaskList((prev) => prev.filter((_, i) => i !== index));
  };

  // タスク名変更
  const onTaskNameChange = (value, index) => {
    setTaskList((prev) =>
      prev
        .map((task, i) => (i === index ? { ...task, name: value } : task))
        .filter((task) => task.name !== "")
    );
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  gap: 10px;
  border-radius: 4px;
  background: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
