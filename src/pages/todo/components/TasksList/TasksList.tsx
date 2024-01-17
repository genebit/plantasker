import { useContext } from "react"
import { TaskCard } from "@/pages/todo/components"
import TaskContext from "@/pages/todo/contexts/TaskContext"

function TasksList() {
  const context = useContext(TaskContext)
  const tasks = context?.tasks.filter((task) => !task.done)
  const finishedTasks = context?.tasks.filter((task) => task.done)

  const Prompt = () => {
    const taskLength = tasks?.length ?? 0
    const finishedTaskLength = finishedTasks?.length ?? 0

    let component = undefined
    if (context?.tasks.length === 0) {
      // this user has no tasks yet.
      component = (
        <p className="absolute text-sm left-[2rem] top-1/4 text-center animate-fade-in">
          Start writing tasks and marvel at your beautiful tree! 🌱
        </p>
      )
    }
    if (taskLength == 0 && finishedTaskLength != 0) {
      // this user has finished all tasks and all are placed
      // on the finished tasks list.
      component = (
        <p className="absolute text-sm left-[2rem] top-1/4 text-center animate-fade-in">
          Good job! you've completed all your tasks for today 💪 <br />
          Now marvel at your beautiful tree!
        </p>
      )
    }

    return component
  }

  return (
    <>
      <div className="max-h-[9rem] min-h-[9rem] relative overflow-y-scroll scroll-shadows">
        {tasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
        <Prompt />
      </div>
    </>
  )
}

export default TasksList
