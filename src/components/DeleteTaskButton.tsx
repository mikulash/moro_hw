import React from "react";
import { Trash } from "lucide-react"; // Icon library, adjust the import path if necessary
import { useAppDispatch } from "@/store/store"; // Adjust the path as needed
import { deleteTask } from "@/features/tasksThunks"; // Adjust the path as needed

interface TrashButtonProps {
  taskId: string;
}

const DeleteTaskButton: React.FC<TrashButtonProps> = ({ taskId }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800"
      aria-label="Delete task"
    >
      <Trash className="w-5 h-5" />
    </button>
  );
};

export default DeleteTaskButton;
