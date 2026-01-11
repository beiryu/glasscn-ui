import { KanbanBoard } from "./components/kanban-board"

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center p-6 md:p-10">
      <div className="w-full max-w-7xl">
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold">Kanban Board</h1>
          <p className="text-muted-foreground">
            Drag and drop tasks between columns to organize your workflow
          </p>
        </div>
        <KanbanBoard />
      </div>
    </div>
  )
}
