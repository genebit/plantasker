import { useState } from "react"

import TickTask from "./TickTask"
import FormTaskField from "./FormTaskField"
import TaskEditingContext from "./TaskEditingContext"

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [editing, setEditing] = useState(false)

  const toggleEditing = () => setEditing(!editing)

  const toggleForm = () => {
    return (
      <TaskEditingContext.Provider value={{ editing, setEditing }}>
        {editing ? (
          <FormTaskField task={task} />
        ) : (
          <label
            className={`text-sm py-3 font-medium w-full whitespace-nowrap overflow-x-hidden overflow-ellipsis leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
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
    <div className="flex items-center px-3 space-x-2">
      <TickTask task={task} editing={editing} />
      {toggleForm()}
    </div>
  )
}

export default TaskCard
