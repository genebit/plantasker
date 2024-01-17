import { ChangeEvent, FormEvent, useContext, useState } from "react"

import { Button, Input } from "@/components/ui"
import { getTasksFromLocalStorage, setUid } from "@/pages/todo/utils"
import { toast } from "sonner"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import { clickSFX, trashSFX } from "@/lib/constants"
import playAudio from "@/pages/todo/utils/playAudio"

const CreateTask: React.FC = () => {
  const context = useContext(TaskContext)

  const [taskDescription, setTaskDescription] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTaskDescription(e.target.value)

  function createTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // validate the task
    if (taskDescription.trim().length === 0) {
      toast.error("Invalid task", {
        description: "Please fill in the required field.",
        dismissible: true,
        action: { label: "Close", onClick: () => null },
      })

      playAudio(trashSFX)

      // clear the form
      setTaskDescription("")

      return
    }

    // if it's validated, then create the task
    // 1. define the object for the task
    const task = {
      id: setUid(),
      description: taskDescription,
      done: false,
    }

    // 2. store task to storage as a json string
    localStorage.setItem(task.id.toString(), JSON.stringify(task))

    // 3. refresh the fetching tasks
    // fetch the updated tasks from localStorage
    const newTasks = getTasksFromLocalStorage()

    // 4. update the state with the new tasks
    context?.setTasks(newTasks)

    // 5. clear the form
    setTaskDescription("")

    playAudio(clickSFX)
  }

  return (
    <>
      <form className="flex gap-3" onSubmit={createTask}>
        <Input
          placeholder="Write some tasks"
          className="w-[20rem] transition-all duration-75"
          value={taskDescription}
          onChange={handleChange}
        />
        <Button className="active:scale-90" type="submit">
          Create
        </Button>
      </form>
    </>
  )
}

export default CreateTask
