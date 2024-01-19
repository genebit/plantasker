import { useContext } from "react"
import { TaskCard } from "@/pages/todo/components"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import TaskListFinishedPrompt from "./TaskListFinishedPrompt"

function TasksListFinished() {
  const context = useContext(TaskContext)
  const finishedTasks: Task[] = context?.getFinishedTasks!() || []
  return (
    <div className="max-h-[12rem] min-h-[12rem] overflow-y-scroll relative scroll-shadows">
      {finishedTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />
      })}
      <TaskListFinishedPrompt />
    </div>
  )
}

export default TasksListFinished
