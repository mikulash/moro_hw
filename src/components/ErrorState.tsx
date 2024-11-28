export function ErrorState({ error }: { error: string }) {
  return <div className="text-center py-4 text-red-500">Error: {error}</div>;
}
