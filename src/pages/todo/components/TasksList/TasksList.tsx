import { useContext } from "react"
import { TaskCard } from "@/pages/todo/components"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import { TaskListPrompt } from "./TaskListPrompt"

function TasksList() {
  const context = useContext(TaskContext)

  const tasks = context?.tasks.filter((task) => !task.done)

  return (
    <div className="max-h-[12rem] min-h-[12rem] relative overflow-y-scroll scroll-shadows">
      {tasks?.map((task) => {
        return <TaskCard key={task.id} task={task} />
      })}
      <TaskListPrompt />
    </div>
  )
}

export default TasksList
