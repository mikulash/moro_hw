import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Dispatch, SetStateAction } from "react";
import { FilterState } from "@/components/tasks/TaskFilter.ts";

interface TaskFiltersProps {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
}

export default function TaskFilters({
  filter,
  setFilter,
}: Readonly<TaskFiltersProps>) {
  return (
    <ToggleGroup
      type="single"
      value={filter}
      onValueChange={(value) => {
        if (value) {
          setFilter(value as FilterState);
        }
      }}
      aria-label="Filter tasks"
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="not_completed">Not Done</ToggleGroupItem>
      <ToggleGroupItem value="completed">Done</ToggleGroupItem>
    </ToggleGroup>
  );
}
