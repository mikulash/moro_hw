import "./App.css";
import { useAppDispatch } from "./store/store.ts";
import { TaskList } from "@/components/tasks/TaskList.tsx";
import { NewTaskInput } from "@/components/tasks/NewTaskInput.tsx";
import { fetchTasks } from "@/features/tasksThunks.ts";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className="w-full">
      <NewTaskInput />
      <div className="rounded-md border">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
