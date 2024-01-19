import { useContext } from "react"
import TaskContext from "../../contexts/TaskContext"

const TasksListFinishedPrompt = () => {
  const context = useContext(TaskContext)
  const finishedTasks = context?.tasks.filter((task) => task.done)

  if (finishedTasks?.length === 0) {
    return (
      <p className="absolute text-sm translate-x-1/2 top-[4rem] text-center animate-fade-in">
        Cute tree... Come on, get planting! 🌱
      </p>
    )
  }
}

export default TasksListFinishedPrompt
