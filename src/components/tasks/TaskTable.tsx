import { Task } from "@/api/generated";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import TaskRow from "@/components/tasks/TaskRow.tsx";
import DeleteTaskButton from "@/components/DeleteTaskButton.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

interface TaskTableProps {
  tasks: Task[];
  onToggleCompletion: (task: Task) => void;
  onUpdateTaskText: (taskId: string, newText: string) => void;
  doneTasksCount: number;
}

export default function TaskTable({
  tasks,
  onToggleCompletion,
  onUpdateTaskText,
  doneTasksCount,
}: Readonly<TaskTableProps>) {
  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "completed",
      id: "completed",
      header: `Completed (${doneTasksCount})`,
      cell: ({ row }) => (
        <Checkbox
          checked={row.original.completed}
          onCheckedChange={() => onToggleCompletion(row.original)}
          aria-label="Toggle task completion"
        />
      ),
    },
    {
      accessorKey: "text",
      header: "Task",
      cell: ({ row }) => (
        <TaskRow task={row.original} onUpdateTaskText={onUpdateTaskText} />
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => <DeleteTaskButton taskId={row.original.id} />,
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
