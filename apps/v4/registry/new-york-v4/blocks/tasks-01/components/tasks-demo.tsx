"use client"

import { columns } from "@/app/(app)/examples/tasks/components/columns"
import { DataTable } from "@/app/(app)/examples/tasks/components/data-table"
import { UserNav } from "@/app/(app)/examples/tasks/components/user-nav"
import { type Task } from "@/app/(app)/examples/tasks/data/schema"

// Sample tasks data
const sampleTasks: Task[] = [
  {
    id: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    label: "documentation",
    priority: "medium",
  },
  {
    id: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    label: "documentation",
    priority: "medium",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    label: "bug",
    priority: "high",
  },
  {
    id: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "backlog",
    label: "feature",
    priority: "medium",
  },
  {
    id: "TASK-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    label: "feature",
    priority: "medium",
  },
  {
    id: "TASK-1280",
    title:
      "Use the online FTP application, then you can calculate the bluetooth panel!",
    status: "done",
    label: "bug",
    priority: "high",
  },
  {
    id: "TASK-7262",
    title:
      "The TCP port is down, parse the optical bandwidth so we can input the HTTP panel!",
    status: "todo",
    label: "bug",
    priority: "high",
  },
  {
    id: "TASK-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "in progress",
    label: "feature",
    priority: "medium",
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    status: "todo",
    label: "feature",
    priority: "low",
  },
  {
    id: "TASK-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "in progress",
    label: "documentation",
    priority: "high",
  },
]

export function TasksDemo() {
  return (
    <div className="flex h-full flex-1 flex-col gap-8">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome back!
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={sampleTasks} columns={columns} />
    </div>
  )
}
