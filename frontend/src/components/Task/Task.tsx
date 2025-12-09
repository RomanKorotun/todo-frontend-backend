import type { FC } from "react";
import type { ITask } from "../../types/task";
import { Button, Wrapper } from "./Task.styled";

interface ITaskProps {
  task: ITask;
  remove(id: number): void;
}

export const Task: FC<ITaskProps> = ({ task, remove }) => {
  return (
    <Wrapper>
      {task.text}
      <Button onClick={() => remove(task.id)}>✖</Button>
    </Wrapper>
  );
};
