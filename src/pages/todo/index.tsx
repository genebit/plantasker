import { useEffect, useState } from "react"

import { getTasksFromLocalStorage } from "@pages/todo/utils"
import HomeLayout from "@layouts/HomeLayout"
import TaskContext from "@pages/todo/contexts/TaskContext"
import { TasksList, TasksListFinished } from "@pages/todo/components"
import Task from "@pages/todo/types/interfaces/task"
import { CreateTask, Tree } from "@pages/todo/features"

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const unFinishedTasks = tasks.filter((task) => !task.done)
  const finishedTasks = tasks.filter((task) => task.done)

  useEffect(() => {
    const tasksFromLocalStorage: Task[] = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
  }, [])

  return (
    <>
      <HomeLayout>
        <div className="container">
          <TaskContext.Provider value={{ tasks, setTasks }}>
            <Tree />
            <div className="flex flex-col justify-center gap-5 mx-auto w-max">
              <CreateTask />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label className="text-sm opacity-75 w-max">Tasks</label>
                  <label className="text-sm opacity-75 w-max">{unFinishedTasks.length} Remaining Task(s)</label>
                </div>
                <TasksList />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label className="text-sm opacity-75 w-max">Finished Tasks</label>
                  <label className="text-sm opacity-75 w-max">{finishedTasks.length} Done</label>
                </div>
                <TasksListFinished />
              </div>
            </div>
          </TaskContext.Provider>
        </div>
      </HomeLayout>
    </>
  )
}

export default TodoPage
