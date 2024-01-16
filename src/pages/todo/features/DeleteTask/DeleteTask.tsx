import { useContext } from "react"
import { Trash } from "lucide-react"

import { Button } from "@components/ui"
import { getTasksFromLocalStorage } from "@pages/todo/utils"
import TaskContext from "@pages/todo/contexts/TaskContext"
import { trashSFX } from "@lib/constants"
import playAudio from "@pages/todo/utils/playAudio"

interface Props {
  id: number
}

const DeleteTask: React.FC<Props> = ({ id }) => {
  const context = useContext(TaskContext)

  function deleteTask() {
    // 1. remove the task from localstorage
    localStorage.removeItem(id.toString())

    // 2. refresh the fetching tasks
    // fetch the updated tasks from localStorage
    const newTasks = getTasksFromLocalStorage()

    // 3. update the state with the new tasks
    context?.setTasks(newTasks)

    playAudio(trashSFX)
  }

  return (
    <>
      <Button
        className="p-3 active:scale-90 opacity-50 hover:opacity-100 hover:text-red-500 transition-opacity"
        variant={"ghost"}
        onClick={deleteTask}
      >
        <Trash size={16} />
      </Button>
    </>
  )
}
export default DeleteTask
