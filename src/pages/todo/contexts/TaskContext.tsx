import { Dispatch, SetStateAction, createContext } from "react"

import Task from "@pages/todo/types/interfaces/task"

interface TasksState {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

const TaskContext = createContext<TasksState | undefined>(undefined)

export default TaskContext
