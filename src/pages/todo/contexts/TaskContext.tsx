import { Dispatch, SetStateAction, createContext } from "react"

interface TasksState {
  tasks: Task[]
  getTasks?: () => void
  getFinishedTasks?: () => void
  getFilteredTasks?: () => void
  setTasks?: Dispatch<SetStateAction<Task[]>>
  addTask?: (text: string) => void
  updateTask?: (task: Task) => void
  tickTask?: (taskId: number) => void
  deleteTask?: (taskId: number) => void
  clearTasks?: () => void
}

const TaskContext = createContext<TasksState | undefined>(undefined)

export default TaskContext
