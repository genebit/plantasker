import companyLogo from "@assets/brands/logo-full.png"
import { tree20 } from "@assets/tree/growth"
import { Button, Checkbox, Input } from "@components/ui"
import { useEffect, useState } from "react"

interface Task {
  id: number
  description: string
  done: boolean
}

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const [formData, setFormData] = useState({
    taskDescription: "",
  })

  const inputSetValueOnChange = (event: any) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  function getTasksFromLocalStorage() {
    const keys = Object.keys(localStorage)
    const tasksArray = keys.map((key) => {
      const taskString = localStorage.getItem(key)
      // Check if taskString is not null before parsing
      return taskString !== null ? JSON.parse(taskString) : null
    })
    // Filter out null values from the array
    return tasksArray.filter((task) => task !== null)
  }

  useEffect(() => {
    const tasksFromLocalStorage = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
  }, [])

  function setUid() {
    // keys/pk are just numbers incremented
    function getLatestId() {
      const keys = Object.keys(localStorage)

      if (keys.length === 0) {
        // No keys in localStorage
        return 0
      }

      // Convert keys to numbers and find the maximum
      const maxKey = Math.max(...keys.map(Number))

      return maxKey
    }

    function incrementLatestId() {
      // to set a unique id for the task
      let id = getLatestId()
      return ++id
    }

    return incrementLatestId()
  }

  function createTask() {
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
    const updatedTasks = getTasksFromLocalStorage()

    // Update the state with the new tasks
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="relative min-h-screen">
        <main className="container flex justify-center flex-col gap-5">
          <img src={tree20} alt="Tree" className="w-max mx-auto" />
          <div className="mx-auto flex justify-center flex-col gap-5 w-max">
            <form className="flex gap-3">
              <Input
                placeholder="Create Tasks"
                className="w-[20rem]"
                value={formData.taskDescription}
                onChange={inputSetValueOnChange}
              />
              <Button type="submit" onClick={createTask}>
                Submit
              </Button>
            </form>
            {/* Tasks */}
            <div className="flex flex-col gap-3">
              <label className="opacity-75 w-max">Tasks</label>
              {tasks.map((task) => {
                return (
                  <div key={task.id} className="flex items-center space-x-2">
                    <Checkbox id={`task-${task.id}`} />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        task.done ? "line-through" : ""
                      }`}
                    >
                      {task.description}
                    </label>
                  </div>
                )
              })}
            </div>
            {/* Finished Tasks */}
            <div className="flex justify-between">
              <label className="opacity-75 w-max">Finished Tasks</label>
              <label className="opacity-75 w-max">0 Done</label>
            </div>
          </div>
        </main>
        <footer className="absolute bottom-10 left-10">
          <img src={companyLogo} alt="Company Logo" />
        </footer>
      </div>
    </>
  )
}

export default TodoPage
