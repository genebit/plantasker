import { useContext } from "react"
import { TaskCard } from "@pages/todo/components"
import TaskContext from "@pages/todo/contexts/TaskContext"

function TasksListFinished() {
  const context = useContext(TaskContext)
  const finishedTasks = context?.tasks.filter((task) => task.done)

  return (
    <>
      <div className="max-h-[8rem] overflow-y-scroll scroll-shadows">
        {finishedTasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
    </>
  )
}

export default TasksListFinished
