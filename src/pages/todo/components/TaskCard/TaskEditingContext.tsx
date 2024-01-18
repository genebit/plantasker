import { Dispatch, SetStateAction, createContext } from "react"

interface TaskEditingState {
  editing: boolean
  setEditing: Dispatch<SetStateAction<boolean>>
}

const TaskEditingContext = createContext<TaskEditingState | undefined>(undefined)

export default TaskEditingContext
