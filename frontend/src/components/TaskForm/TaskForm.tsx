import { useState, type FC } from "react";
import { Button, Form, Input } from "./TaskForm.styled";

interface ITaskForm {
  add(text: string): void;
}

export const TaskForm: FC<ITaskForm> = ({ add }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value) {
      add(value);
      setValue("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <Button type="submit">add</Button>
    </Form>
  );
};
