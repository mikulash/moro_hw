import { useState } from "react";
import { Task } from "@/api/generated";

interface TaskRowProps {
  task: Task;
  onUpdateTaskText: (taskId: string, newText: string) => void;
}

export default function TaskRow({ task, onUpdateTaskText }: TaskRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    onUpdateTaskText(task.id, editedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") setIsEditing(false);
  };

  return isEditing ? (
    <input
      type="text"
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
      autoFocus
      className="border rounded px-2 py-1 w-full"
    />
  ) : (
    <div onDoubleClick={() => setIsEditing(true)} className="cursor-pointer">
      {task.text}
    </div>
  );
}
