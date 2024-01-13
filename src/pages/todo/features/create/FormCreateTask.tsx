import { ChangeEvent, FormEvent, useState } from "react"

import { Button, Input } from "@components/ui"
import { getTasksFromLocalStorage, setUid } from "@pages/todo/utils"

interface Props {
  updateTasks: (tasks: Task[]) => void
}

const FormCreateTask: React.FC<Props> = ({ updateTasks }) => {
  const [formData, setFormData] = useState({
    taskDescription: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      taskDescription: e.target.value,
    })
  }

  function createTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // validate the task

    // define the object for the task
    const task = {
      id: setUid(),
      description: formData.taskDescription,
      done: false,
    }

    console.log(task)

    // store task to storage
    localStorage.setItem(task.id.toString(), JSON.stringify(task))

    // refresh the fetching tasks
    // Fetch the updated tasks from localStorage
    const newTasks = getTasksFromLocalStorage()

    // Update the state with the new tasks
    updateTasks(newTasks)
  }

  return (
    <>
      <form className="flex gap-3" onSubmit={createTask}>
        <Input
          placeholder="Create Tasks"
          className="w-[20rem]"
          value={formData.taskDescription}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}

export default FormCreateTask
