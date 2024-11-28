import { useMemo, useState } from "react";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { Task } from "@/api/generated";
import { setTaskCompleted, setTaskIncomplete } from "@/features/tasksThunks";
import DeleteTaskButton from "@/components/DeleteTaskButton.tsx";

enum FilterState {
  All = "all",
  Completed = "completed",
  NotCompleted = "not_completed",
}

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const isLoading = useSelector((state: RootState) => state.tasks.loading);
  const error = useSelector((state: RootState) => state.tasks.error);

  // State for filtering tasks using the enum
  const [filter, setFilter] = useState<FilterState>(FilterState.All);

  // Handle toggling task completion
  const handleToggleCompletion = (task: Task) => {
    if (task.completed) {
      dispatch(setTaskIncomplete(task.id));
    } else {
      dispatch(setTaskCompleted(task.id));
    }
  };

  // Filter tasks based on the selected filter
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

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "completed",
      id: "completed",
      header: `Completed (${doneTasksCount})`,
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
      cell: ({ row }) => <DeleteTaskButton taskId={row.original.id} />,
    },
  ];

  const table = useReactTable({
    data: filteredTasks,
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

  if (error !== null) {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Error: {error}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <div>
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

      <div className="mt-4 flex justify-center">
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(value) => {
            if (value !== null) {
              setFilter(value as FilterState);
            }
          }}
          aria-label="Filter tasks"
        >
          <ToggleGroupItem value={FilterState.All}>All</ToggleGroupItem>
          <ToggleGroupItem value={FilterState.NotCompleted}>
            Not Done
          </ToggleGroupItem>
          <ToggleGroupItem value={FilterState.Completed}>Done</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
