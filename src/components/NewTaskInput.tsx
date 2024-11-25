import { Input } from "@/components/ui/input.tsx";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/store/store.ts";
import { addTask } from "@/features/tasksThunks.ts";
import { Button } from "@/components/ui/button.tsx";

export function NewTaskInput() {
  const [taskText, setTaskText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText.trim()));
      setTaskText("");
    }
  };

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="What needs to be done..."
        className="max-w-sm mr-2"
        value={taskText}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
}
