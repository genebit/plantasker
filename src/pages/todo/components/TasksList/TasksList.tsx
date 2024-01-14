import { useContext } from "react"
import { TaskCard } from "@pages/todo/components"
import TaskContext from "@pages/todo/contexts/TaskContext"

function TasksList() {
  const context = useContext(TaskContext)
  const tasks = context?.tasks.filter((task) => !task.done)

  return (
    <>
      <div className="max-h-[9rem] min-h-[9rem] relative overflow-y-scroll scroll-shadows">
        {tasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
        {tasks?.length === 0 ? (
          <p className="absolute text-sm left-[2rem] top-1/4 text-center">
            Good job! you've completed all your tasks for today 💪 <br />
            Now marvel at your beautiful tree!
          </p>
        ) : null}
      </div>
    </>
  )
}

export default TasksList
