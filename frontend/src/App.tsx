import { useEffect, useState } from "react";
import axios from "axios";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import type { ITask } from "./types/task";

const BACKEND_URL = "http://localhost:3001";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        setError(null);
        const { data } = await axios.get(`${BACKEND_URL}/api/tasks`);
        setTasks(data);
      } catch {
        setError("Не вдалося завантажити список задач");
      }
    };
    getAll();
  }, []);

  const addTask = async (text: string) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/tasks`, { text });
      setTasks((prevState) => [...prevState, data]);
    } catch {
      console.log("Error");
    }
  };

  const removeTask = async (id: number) => {
    try {
      const { data: deletedId } = await axios.delete(
        `${BACKEND_URL}/api/tasks/${id}`
      );
      setTasks((prevState) =>
        prevState.filter((task) => task.id !== deletedId)
      );
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <h1>My todo list</h1>
      <TaskForm add={addTask} />
      {error && <div>{error}</div>}
      {tasks.length === 0 && error === null && (
        <div>Список порожній. Додайте перше завдання!</div>
      )}
      {tasks.length > 0 && <TaskList tasks={tasks} remove={removeTask} />}
    </>
  );
}

export default App;
