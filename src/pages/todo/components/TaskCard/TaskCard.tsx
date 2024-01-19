import { useContext, useEffect, useState } from "react"

import TickTask from "./TickTask"
import FormTaskField from "./FormTaskField"
import TaskEditingContext from "./TaskEditingContext"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui"
import TaskContext from "../../contexts/TaskContext"

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [editing, setEditing] = useState(false)
  const [priority, setPriority] = useState("Blank")

  const taskContext = useContext(TaskContext)

  const toggleEditing = () => setEditing(!editing)

  const setTaskPriority = (e: any) => {
    const selectedPriority = e.target?.innerText

    if (selectedPriority === task.priority) {
      task.priority = "Blank"
      taskContext?.updateTask!(task)

      setPriority("Blank")
    } else {
      task.priority = selectedPriority
      taskContext?.updateTask!(task)

      setPriority(selectedPriority)
    }
  }

  const markPriority = () => {
    switch (task.priority) {
      case "Highest":
        return <span className="absolute w-2 h-2 bg-red-500 rounded-full right-3"></span>
      case "Medium":
        return <span className="absolute w-2 h-2 bg-orange-500 rounded-full right-3"></span>
      case "Lowest":
        return <span className="absolute w-2 h-2 bg-green-400 rounded-full right-3"></span>
    }
  }

  useEffect(() => {
    markPriority()
  }, [priority])

  const toggleForm = () => {
    return (
      <TaskEditingContext.Provider value={{ editing, setEditing }}>
        {editing ? (
          <FormTaskField task={task} />
        ) : (
          <label
            className={`text-sm py-3 font-medium w-[24rem] whitespace-nowrap overflow-x-hidden overflow-ellipsis leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              task.done ? "line-through" : ""
            }`}
            onClick={toggleEditing}
          >
            {task.description}
          </label>
        )}
      </TaskEditingContext.Provider>
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="relative flex items-center px-3 space-x-2">
          <TickTask task={task} editing={editing} />
          {toggleForm()}
          {markPriority()}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[12rem]">
        <ContextMenuLabel>Set priority as</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem textValue="Highest" className="gap-2" onSelect={setTaskPriority}>
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Highest
        </ContextMenuItem>
        <ContextMenuItem textValue="Medium" className="gap-2" onSelect={setTaskPriority}>
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          Medium
        </ContextMenuItem>
        <ContextMenuItem textValue="Lowest" className="gap-2" onSelect={setTaskPriority}>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Lowest
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default TaskCard
