import { useEffect, useState } from "react"

import { tree20 } from "@assets/tree/growth"
import { Checkbox } from "@components/ui"
import FormCreateTask from "@/pages/todo/features/create/FormCreateTask"
import { getTasksFromLocalStorage } from "@pages/todo/utils"
import HomeLayout from "@/layouts/Home"

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const tasksFromLocalStorage = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
  }, [])

  const handleUpdateTasks = (updatedTasks: Task[]) => setTasks(updatedTasks)

  return (
    <>
      <HomeLayout>
        <img src={tree20} alt="Tree" className="mx-auto w-max" />
        <div className="flex flex-col justify-center gap-5 mx-auto w-max">
          <FormCreateTask updateTasks={handleUpdateTasks} />
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
      </HomeLayout>
    </>
  )
}

export default TodoPage
