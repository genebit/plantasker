import { Dispatch, SetStateAction, createContext } from "react"

interface EditTasksState {
  editing: boolean
  setEditing: Dispatch<SetStateAction<boolean>>
}

const EditTaskContext = createContext<EditTasksState | undefined>(undefined)

export default EditTaskContext
