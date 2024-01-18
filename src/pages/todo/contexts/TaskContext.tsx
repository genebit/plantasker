import { createContext } from "react"

interface TasksState {
  tasks: Task[]
  getTasks?: () => void
  addTask?: (text: string) => void
  updateTask?: (task: Task) => void
  tickTask?: (taskId: number) => void
  deleteTask?: (taskId: number) => void
  clearTasks?: () => void
}

const TaskContext = createContext<TasksState | undefined>(undefined)

export default TaskContext
