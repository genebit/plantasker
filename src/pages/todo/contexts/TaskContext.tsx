import { Dispatch, SetStateAction, createContext } from "react"

interface TasksState {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

const TaskContext = createContext<TasksState | undefined>(undefined)

export default TaskContext
