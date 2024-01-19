import { useContext } from "react"
import TaskContext from "../../contexts/TaskContext"

export const TaskListPrompt = () => {
  const context = useContext(TaskContext)

  const tasks = context?.tasks.filter((task) => !task.done)
  const finishedTasks = context?.tasks.filter((task) => task.done)

  const taskLength = tasks?.length ?? 0
  const finishedTaskLength = finishedTasks?.length ?? 0

  if (context?.tasks.length === 0) {
    // this user has no tasks yet.
    return (
      <p className="absolute text-sm left-[4rem] top-[4rem] text-center animate-fade-in">
        Start writing tasks and marvel at your beautiful tree! 🌱
      </p>
    )
  }
  if (taskLength == 0 && finishedTaskLength != 0) {
    // this user has finished all tasks and all are placed
    // on the finished tasks list.
    return (
      <p className="absolute text-sm left-[4rem] top-[4rem] text-center animate-fade-in">
        Good job! you've completed all your tasks for today 💪 <br />
        Now marvel at your beautiful tree!
      </p>
    )
  }
}
