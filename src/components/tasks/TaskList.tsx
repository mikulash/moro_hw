import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { Task } from "@/api/generated";
import {
  setTaskCompleted,
  setTaskIncomplete,
  updateTaskText,
} from "@/features/tasksThunks";
import { ErrorState } from "@/components/ErrorState.tsx";
import { LoadingState } from "@/components/LoadingState.tsx";
import TaskTable from "@/components/tasks/TaskTable.tsx";
import TaskFilters from "@/components/tasks/TaskFilters.tsx";
import { FilterState } from "@/components/tasks/TaskFilter.ts";

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const isLoading = useSelector((state: RootState) => state.tasks.loading);
  const error = useSelector((state: RootState) => state.tasks.error);

  const [filter, setFilter] = useState<FilterState>(FilterState.All);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case FilterState.Completed:
        return tasks.filter((task) => task.completed);
      case FilterState.NotCompleted:
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const doneTasksCount = tasks.filter((task) => task.completed).length;

  const handleToggleCompletion = (task: Task) => {
    if (task.completed) {
      dispatch(setTaskIncomplete(task.id));
    } else {
      dispatch(setTaskCompleted(task.id));
    }
  };

  const handleUpdateTaskText = (taskId: string, newText: string) => {
    dispatch(updateTaskText({ id: taskId, text: newText }));
  };

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div>
      <TaskTable
        tasks={filteredTasks}
        onToggleCompletion={handleToggleCompletion}
        onUpdateTaskText={handleUpdateTaskText}
        doneTasksCount={doneTasksCount}
      />
      <TaskFilters filter={filter} setFilter={setFilter} />
    </div>
  );
}
