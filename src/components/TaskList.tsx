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
import { RootState } from "@/store/store.ts";
import { useSelector } from "react-redux";
import { Task } from "@/api/generated";

export function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "completed",
      id: "completed",
      header: "Completed",
      cell: ({ row }) => (
        <Checkbox
          checked={row.original.completed}
          // onCheckedChange={() => handleToggleCompletion(row.original.id)}
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
