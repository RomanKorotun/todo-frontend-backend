import type { FC } from "react";
import { Task } from "../Task/Task";
import type { ITask } from "../../types/task";
import { ListItem } from "./TaskList.styled";

interface ITaskListProps {
  tasks: ITask[];
  remove(id: number): void;
}
export const TaskList: FC<ITaskListProps> = ({ tasks, remove }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Task task={task} remove={remove} />
        </ListItem>
      ))}
    </ul>
  );
};
