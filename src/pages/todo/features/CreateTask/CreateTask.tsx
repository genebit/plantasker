import { ChangeEvent, FormEvent, useContext, useState } from "react"

import { Button, Input } from "@/components/ui"
import { toast } from "sonner"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import { clickSFX, trashSFX } from "@/lib/constants"
import playAudio from "@/pages/todo/utils/playAudio"

const CreateTask = () => {
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

    context?.addTask!(taskDescription)

    // 5. clear the form
    setTaskDescription("")

    playAudio(clickSFX)
  }

  return (
    <form className="flex gap-3" onSubmit={createTask}>
      <Input
        placeholder="Write some tasks"
        className="w-[23rem] transition-all duration-75"
        value={taskDescription}
        onChange={handleChange}
      />
      <Button className="active:scale-90" type="submit">
        Create
      </Button>
    </form>
  )
}

export default CreateTask
