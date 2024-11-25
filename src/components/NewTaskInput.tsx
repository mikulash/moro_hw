import { Input } from "@/components/ui/input.tsx";

export function NewTaskInput() {
  return (
    <div className="flex items-center py-4">
      <Input placeholder="What needs to be done..." className="max-w-sm" />
    </div>
  );
}
