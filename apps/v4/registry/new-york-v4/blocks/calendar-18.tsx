"use client"

import * as React from "react"
import { addDays, addWeeks, format, startOfWeek, subWeeks } from "date-fns"
import {
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Moon,
  Sun,
  Sunset,
  User,
  Users,
} from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

type ShiftType = {
  id: string
  name: string
  time: string
  icon: React.ElementType
  textColor: string
}

type TeamCard = {
  teamName: string
  creators: number
  employees: number
  gradientColor: string
  textColor: string
}

type ExerciseCard = {
  title: string
  image?: string
  tags: Array<{ label: string; color: string }>
}

type ScheduleItem = TeamCard | ExerciseCard | null

const shiftTypes: ShiftType[] = [
  {
    id: "morning",
    name: "Morning",
    time: "7AM - 3PM",
    icon: Sun,
    textColor: "text-[#ff7134]",
  },
  {
    id: "swings",
    name: "Swings",
    time: "3PM - 11PM",
    icon: Sunset,
    textColor: "text-[#f92ca8]",
  },
  {
    id: "nights",
    name: "Nights",
    time: "11PM - 7AM",
    icon: Moon,
    textColor: "text-[#5dcdf9]",
  },
]

// Sample schedule data matching the image
const scheduleData: Record<string, Record<string, ScheduleItem>> = {
  morning: {
    "2025-01-04": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-05": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-06": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-07": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-08": null,
    "2025-01-09": null,
    "2025-01-10": null,
  },
  swings: {
    "2025-01-04": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-05": null,
    "2025-01-06": null,
    "2025-01-07": {
      teamName: "Team Alpha",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(24, 127, 245, 0.5)",
      textColor: "text-[#187ff5]",
    },
    "2025-01-08": {
      teamName: "Team Alpha",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(24, 127, 245, 0.5)",
      textColor: "text-[#187ff5]",
    },
    "2025-01-09": {
      teamName: "Team Alpha",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(24, 127, 245, 0.5)",
      textColor: "text-[#187ff5]",
    },
    "2025-01-10": null,
  },
  nights: {
    "2025-01-04": {
      teamName: "Team Lunar",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(255, 113, 52, 0.5)",
      textColor: "text-[#ff7134]",
    },
    "2025-01-05": null,
    "2025-01-06": null,
    "2025-01-07": null,
    "2025-01-08": {
      title: "Overhead press",
      image: "overhead-press.jpg",
      tags: [
        { label: "Exercise DB", color: "#34c759" },
        { label: "Core", color: "#ff7134" },
      ],
    },
    "2025-01-09": {
      teamName: "Team Alpha",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(24, 127, 245, 0.5)",
      textColor: "text-[#187ff5]",
    },
    "2025-01-10": {
      teamName: "Team Alpha",
      creators: 2,
      employees: 1,
      gradientColor: "rgba(24, 127, 245, 0.5)",
      textColor: "text-[#187ff5]",
    },
  },
}

function TeamCard({ team }: { team: TeamCard }) {
  const isOrange = team.gradientColor.includes("255, 113, 52")
  const gradientColor = isOrange
    ? "rgba(255, 113, 52, 0.5)"
    : "rgba(24, 127, 245, 0.5)"

  return (
    <div
      className="flex h-[110px] flex-col items-center justify-center gap-0.5 rounded-[10px] border px-[27px] py-[9px] shadow-sm dark:border-[rgba(238,238,238,0.1)]"
      style={{
        background: `linear-gradient(180deg, ${gradientColor}, ${gradientColor.replace("0.5", "0")}), linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))`,
      }}
    >
      <div className="shrink-0 text-[13px] leading-[20px] font-medium tracking-[0.01em]">
        {team.teamName}
      </div>
      <div className={`flex shrink-0 items-center gap-[5px] ${team.textColor}`}>
        <Users className="h-3.5 w-3.5" />
        <div className="leading-[20px] font-medium tracking-[0.01em]">
          {team.creators} Creators
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-[5px]">
        <User className="h-3.5 w-3.5 opacity-50" />
        <div className="leading-[20px] font-medium tracking-[0.01em]">
          {team.employees} Employee
        </div>
      </div>
    </div>
  )
}

function ExerciseCard({ exercise }: { exercise: ExerciseCard }) {
  return (
    <div className="flex flex-col items-start text-left text-[9.25px]">
      <div className="bg-card flex flex-col items-center gap-[11.6px] self-stretch rounded-[8.67px] border border-solid px-0 pt-0 pb-[9.2px] dark:bg-gradient-to-b dark:from-[#13161b] dark:to-[#141414]">
        <div className="bg-muted flex h-[60.4px] w-full items-center justify-center rounded-t-[8.67px]">
          <span className="text-muted-foreground text-[6.94px]">Image</span>
        </div>
        <div className="flex flex-col items-start self-stretch px-[9.2px] py-0">
          <div className="flex flex-col items-start gap-[2.9px] self-stretch">
            <div className="text-foreground self-stretch text-[9.25px] leading-[11.56px] font-semibold tracking-[-0.01em]">
              {exercise.title}
            </div>
            <div className="flex items-start gap-[5.8px]">
              {exercise.tags.map((tag) => {
                // Map colors to Badge intents
                const getBadgeProps = () => {
                  if (tag.color === "#34c759") {
                    return {
                      intent: "success" as const,
                      appearance: "outline" as const,
                    }
                  }
                  // For orange/coral (#ff7134), use error with custom styling
                  return {
                    intent: "error" as const,
                    appearance: "outline" as const,
                    className:
                      "bg-[rgba(255,113,52,0.25)] border-[rgba(255,113,52,0)] text-[#ff7134]",
                  }
                }

                return (
                  <Badge
                    key={tag.label}
                    {...getBadgeProps()}
                    className="min-h-[13.87px] px-[4.6px] py-[1.7px] text-[6.94px] leading-[9.25px]"
                  >
                    {tag.label}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyCard() {
  return (
    <div className="bg-muted/50 flex h-[110px] flex-col items-center justify-center gap-[5px] rounded-[10px] border px-[27px] py-[9px] shadow-sm">
      <Grid3x3 className="h-3.5 w-3.5 opacity-50" />
      <div className="text-muted-foreground text-center text-[12px] leading-[14px] font-medium tracking-[0.01em]">
        No tasks
        <br />
        scheduled
      </div>
    </div>
  )
}

export default function Calendar18() {
  const [currentWeek, setCurrentWeek] = React.useState(
    startOfWeek(new Date(2025, 0, 4), { weekStartsOn: 0 })
  )

  const weekStart = currentWeek
  const weekEnd = addDays(weekStart, 6)

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const goToPreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1))
  }

  const goToNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1))
  }

  const formatDateKey = (date: Date) => format(date, "yyyy-MM-dd")

  return (
    <div className="font-inter text-foreground w-full p-8 text-center text-[12px]">
      {/* Navigation Header */}
      <header className="bg-card flex h-[60px] items-center justify-between gap-5 rounded-[15px] border p-2.5 text-left text-[14px]">
        <button
          onClick={goToPreviousWeek}
          className="bg-muted/50 box-border flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-[10px] border px-4 py-1.5 shadow-sm transition-opacity hover:opacity-80"
        >
          <ChevronLeft className="h-[13.3px] w-[13.3px]" />
          <div className="text-foreground leading-[20px] font-semibold tracking-[-0.01em]">
            Previous Week
          </div>
        </button>
        <div className="text-foreground text-[16px] leading-[20px] font-semibold tracking-[-0.01em]">
          {format(weekStart, "MMMM d")} - {format(weekEnd, "MMMM d, yyyy")}
        </div>
        <button
          onClick={goToNextWeek}
          className="bg-muted/50 box-border flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-[10px] border px-4 py-1.5 shadow-sm transition-opacity hover:opacity-80"
        >
          <div className="text-foreground leading-[20px] font-semibold tracking-[-0.01em]">
            Next Week
          </div>
          <ChevronRight className="h-[13.3px] w-[13.3px]" />
        </button>
      </header>

      {/* Column Headers Section */}
      <section className="bg-card mt-4 flex flex-col items-start rounded-[15px] border p-2.5 text-[14px]">
        <div
          className="grid w-full items-center gap-[15px]"
          style={{
            gridTemplateColumns: "minmax(200px, 1.5fr) repeat(7, 1fr)",
          }}
        >
          {/* Shift Type Header */}
          <div className="bg-muted/50 flex h-20 items-center justify-center rounded-[10px] border shadow-sm">
            <div className="text-muted-foreground leading-[20px] font-medium tracking-[0.01em]">
              SHIFT TYPE
            </div>
          </div>

          {/* Day Headers */}
          {weekDays.map((day, index) => {
            const isSunday = index === 0
            const dayName = format(day, "EEE").toUpperCase()
            const dayNumber = format(day, "d")

            return (
              <div
                key={day.toISOString()}
                className={`flex h-20 flex-col items-center justify-center gap-[5px] rounded-xl ${
                  isSunday
                    ? "border border-blue-500/25 bg-blue-500/10 dark:bg-blue-500/20"
                    : "bg-muted/50 rounded-[10px] border shadow-sm"
                }`}
              >
                <div className="text-muted-foreground leading-[20px] font-medium tracking-[0.01em]">
                  {dayName}
                </div>
                <div
                  className={`text-[18px] leading-[20px] font-semibold tracking-[-0.01em] ${
                    isSunday
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-foreground"
                  }`}
                >
                  {dayNumber}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Schedule Rows */}
      <main className="mt-4 flex flex-col gap-4">
        {shiftTypes.map((shift) => {
          const ShiftIcon = shift.icon

          return (
            <section
              key={shift.id}
              className="bg-card/50 flex h-[130px] flex-col items-start rounded-[15px] border p-2.5"
            >
              <div
                className="grid h-full w-full items-center gap-[15px]"
                style={{
                  gridTemplateColumns: "minmax(200px, 1.5fr) repeat(7, 1fr)",
                }}
              >
                {/* Shift Type Header */}
                <div className="bg-muted/30 flex h-[110px] items-center justify-center rounded-[10px] border shadow-sm">
                  <div className="flex items-center gap-[9px]">
                    <ShiftIcon
                      className={`h-[30px] w-[30px] ${shift.textColor}`}
                    />
                    <div className="flex flex-col items-start">
                      <div
                        className={`leading-[21px] font-medium tracking-[0.01em] ${shift.textColor}`}
                      >
                        {shift.name}
                      </div>
                      <div className="text-muted-foreground text-[13px] leading-[18px] font-medium tracking-[0.01em]">
                        {shift.time}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Cells */}
                {weekDays.map((day) => {
                  const dateKey = formatDateKey(day)
                  const item = scheduleData[shift.id]?.[dateKey]

                  return (
                    <div key={dateKey} className="min-w-0">
                      {item ? (
                        "teamName" in item ? (
                          <TeamCard team={item} />
                        ) : (
                          <ExerciseCard exercise={item} />
                        )
                      ) : (
                        <EmptyCard />
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
