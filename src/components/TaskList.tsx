import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store.ts";
import { Task } from "@/api/generated";
import {
  deleteTask,
  setTaskCompleted,
  setTaskIncomplete,
} from "@/features/tasksThunks.ts";
import { Trash } from "lucide-react";

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const isLoading = useSelector((state: RootState) => state.tasks.loading);

  // Handle toggling task completion
  const handleToggleCompletion = (task: Task) => {
    if (task.completed) {
      dispatch(setTaskIncomplete(task.id));
    } else {
      dispatch(setTaskCompleted(task.id));
    }
  };

  // Handle task deletion
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "completed",
      id: "completed",
      header: "Completed",
      cell: ({ row }) => (
        <Checkbox
          checked={row.original.completed}
          onCheckedChange={() => handleToggleCompletion(row.original)}
          aria-label="Toggle task completion"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "text",
      header: "Task",
      cell: ({ row }) => <div>{row.getValue("text")}</div>,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <button
          onClick={() => handleDeleteTask(row.original.id)}
          className="text-red-600 hover:text-red-800"
          aria-label="Delete task"
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Loading...
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No tasks found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
