"use client"

import * as React from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  GripVertical,
  MoreVertical,
  Plus,
  User,
  Hash,
  Calendar,
} from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Input } from "@/registry/new-york-v4/ui/input"

type Task = {
  id: string
  title: string
  assigned?: string
  platform?: string
  dueDate?: string
  progress?: number // 0-4 (number of completed dots out of 4)
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Create Instagram Template",
        assigned: "Assigned",
        platform: "Instagram",
        dueDate: "Due in 3 days",
        progress: 3,
      },
      {
        id: "2",
        title: "Design Facebook Ad",
        assigned: "Assigned",
        platform: "Facebook",
        dueDate: "Due in 5 days",
        progress: 2,
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "3",
        title: "Create YouTube Thumbnail",
        assigned: "Assigned",
        platform: "YouTube",
        dueDate: "Due in 2 days",
        progress: 4,
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "4",
        title: "Setup TikTok Campaign",
        assigned: "Assigned",
        platform: "TikTok",
        dueDate: "Completed",
        progress: 4,
      },
      {
        id: "5",
        title: "Create LinkedIn Post",
        assigned: "Assigned",
        platform: "LinkedIn",
        dueDate: "Completed",
        progress: 4,
      },
    ],
  },
]

function TaskCard({ task, columnId }: { task: Task; columnId: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const progress = task.progress ?? 0

  // Get gradient color based on column/status
  const getGradientColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "linear-gradient(180deg, #ef4444, rgba(22, 22, 24, 0))" // Red
      case "in-progress":
        return "linear-gradient(180deg, #eab308, rgba(22, 22, 24, 0))" // Yellow
      case "done":
        return "linear-gradient(180deg, #22c55e, rgba(22, 22, 24, 0))" // Green
      default:
        return "linear-gradient(180deg, #ef4444, rgba(22, 22, 24, 0))" // Default to red
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative w-[294px] flex flex-col items-start rounded-[15px] bg-[#161618] border border-white/25 box-border"
    >
      {/* Gradient Header */}
      <div
        className="w-full h-[18px] relative rounded-t-[15px] rounded-b-none"
        style={{
          background: getGradientColor(columnId),
        }}
      />

      {/* Content */}
      <div className="w-full flex flex-col items-start px-4 pb-4 gap-3">
        {/* Title Section */}
        <div className="w-full flex flex-col items-start">
          <div className="flex items-center gap-2 opacity-80">
            <button
              {...attributes}
              {...listeners}
              className="h-5 w-5 relative flex items-center justify-center cursor-grab active:cursor-grabbing text-white/60 hover:text-white transition-colors"
            >
              <GripVertical className="h-4 w-4" />
            </button>
            <div className="relative text-base tracking-[-0.02em] leading-[150%] font-medium text-white">
              {task.title}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px relative max-w-full overflow-hidden bg-white/10" />

        {/* Metadata Section */}
        <div className="w-full flex flex-col items-start gap-1.5 text-sm">
          {task.assigned && (
            <div className="w-full h-6 flex items-center gap-2 text-[#1e90ff]">
              <User className="h-3.5 w-3.5" />
              <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                {task.assigned}
              </div>
            </div>
          )}
          {task.platform && (
            <div className="w-full h-6 flex items-center gap-2 text-[#ff1493]">
              <Hash className="h-3.5 w-3.5" />
              <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                {task.platform}
              </div>
            </div>
          )}
          {task.dueDate && (
            <div className="w-full h-6 flex items-center justify-between gap-5 text-[#dc143c]">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                  {task.dueDate}
                </div>
              </div>
              {/* Progress Dots */}
              <div className="flex items-center gap-[5px]">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 relative rounded-full ${
                      index < progress
                        ? "bg-[#ff7f50]"
                        : "bg-[#ff7f50] opacity-25"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function KanbanColumn({ column }: { column: Column }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const [isAddingTask, setIsAddingTask] = React.useState(false)
  const [newTaskTitle, setNewTaskTitle] = React.useState("")

  const taskIds = React.useMemo(
    () => column.tasks.map((task) => task.id),
    [column.tasks]
  )

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      // In a real app, you would add the task to the column here
      console.log("Adding task:", newTaskTitle)
      setNewTaskTitle("")
      setIsAddingTask(false)
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex h-full min-h-[600px] flex-col"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
          {column.title}
        </h3>
        <span className="text-muted-foreground bg-muted rounded-full px-2 py-1 text-xs">
          {column.tasks.length}
        </span>
      </div>
      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
        <div className="min-h-[200px] flex-1 space-y-3 overflow-y-auto pb-4">
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} columnId={column.id} />
          ))}
          {isAddingTask && (
            <div className="relative w-[294px] flex flex-col items-start rounded-[15px] bg-[#161618] border border-white/25 box-border p-3">
              <Input
                placeholder="Task title..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask()
                  } else if (e.key === "Escape") {
                    setIsAddingTask(false)
                    setNewTaskTitle("")
                  }
                }}
                autoFocus
                className="mb-2 bg-transparent border-white/25"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAddTask}>
                  Add
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsAddingTask(false)
                    setNewTaskTitle("")
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </SortableContext>
      {!isAddingTask && (
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground mt-3 justify-start"
          onClick={() => setIsAddingTask(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add task
        </Button>
      )}
    </div>
  )
}

export function KanbanBoard() {
  const [columns, setColumns] = React.useState(initialColumns)
  const [activeId, setActiveId] = React.useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    // Find the columns and tasks
    const activeColumn = columns.find((col) =>
      col.tasks.some((task) => task.id === activeId)
    )
    const overColumn =
      columns.find((col) => col.tasks.some((task) => task.id === overId)) ||
      columns.find((col) => col.id === overId)

    if (!activeColumn || !overColumn) return
    if (activeColumn.id === overColumn.id) return

    setColumns((columns) => {
      const activeTask = activeColumn.tasks.find((task) => task.id === activeId)
      if (!activeTask) return columns

      return columns.map((col) => {
        if (col.id === activeColumn.id) {
          return {
            ...col,
            tasks: col.tasks.filter((task) => task.id !== activeId),
          }
        }
        if (col.id === overColumn.id) {
          return {
            ...col,
            tasks: [...col.tasks, activeTask],
          }
        }
        return col
      })
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    // Handle reordering within the same column
    const activeColumn = columns.find((col) =>
      col.tasks.some((task) => task.id === activeId)
    )
    const overColumn =
      columns.find((col) => col.tasks.some((task) => task.id === overId)) ||
      columns.find((col) => col.id === overId)

    if (!activeColumn || !overColumn) return

    if (activeColumn.id === overColumn.id) {
      // Reorder within same column
      const activeIndex = activeColumn.tasks.findIndex(
        (task) => task.id === activeId
      )
      const overIndex = overColumn.tasks.findIndex((task) => task.id === overId)

      if (activeIndex !== overIndex) {
        setColumns((columns) =>
          columns.map((col) => {
            if (col.id === activeColumn.id) {
              const newTasks = [...col.tasks]
              const [removed] = newTasks.splice(activeIndex, 1)
              newTasks.splice(overIndex, 0, removed)
              return { ...col, tasks: newTasks }
            }
            return col
          })
        )
      }
    }
  }

  return (
    <div className="h-full w-full">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          {columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>
      </DndContext>
    </div>
  )
}
