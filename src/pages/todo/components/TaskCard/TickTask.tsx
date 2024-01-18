import { Checkbox } from "@/components/ui"
import { useContext } from "react"
import TaskContext from "../../contexts/TaskContext"

interface TickTaskProps {
  task: Task
  editing: boolean
}

const TickTask = ({ task, editing }: TickTaskProps) => {
  const tasksContext = useContext(TaskContext)

  const tickTask = () => tasksContext?.tickTask!(task.id)

  return (
    <Checkbox id={`task-${task.id}`} disabled={editing ? true : false} onCheckedChange={tickTask} checked={task.done} />
  )
}

export default TickTask
