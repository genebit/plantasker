import { useEffect, useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import logo from "@assets/brands/64x64.png"
import { Button } from "@components/ui"
import HomeLayout from "@layouts/HomeLayout"
import { TasksList, TasksListFinished } from "@pages/todo/components"
import { getTasksFromLocalStorage } from "@pages/todo/utils"
import Task from "@pages/todo/types/interfaces/task"
import TaskContext from "@pages/todo/contexts/TaskContext"
import ClearTasks from "@pages/todo/features/ClearTasks/ClearTasks"
import { CreateTask, Tree } from "@pages/todo/features"

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [hideTree, setHideTree] = useState(false)

  const unFinishedTasks = tasks.filter((task) => !task.done)
  const finishedTasks = tasks.filter((task) => task.done)

  // progress bar
  const completionPercentage = Math.round((finishedTasks.length / tasks.length) * 100)

  useEffect(() => {
    const tasksFromLocalStorage: Task[] = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
  }, [])

  const toggleTree = () => setHideTree(!hideTree)

  return (
    <>
      <HomeLayout>
        <div className="container">
          <header className="w-max mx-auto mt-5">
            <div className="flex gap-2 items-center">
              <h2 className="scroll-m-20 font-inter-900 text-3xl font-semibold tracking-tight">Plantasker</h2>
              <img src={logo} alt="" />
            </div>
            <div className="flex items-center gap-1 mx-auto w-max">
              <div className="flex gap-3">
                <span className="text-slate-500">{completionPercentage}%</span>
                <span className="text-slate-500">•</span>
              </div>
              <Button onClick={toggleTree} size={"sm"} variant={"ghost"} className="gap-2 px-2 text-slate-500">
                {hideTree ? (
                  <>
                    <EyeOff /> Show Tree
                  </>
                ) : (
                  <>
                    <Eye /> Hide Tree
                  </>
                )}
              </Button>
            </div>
          </header>
          <TaskContext.Provider value={{ tasks, setTasks }}>
            {hideTree ? null : <Tree />}
            <div className="flex flex-col justify-center gap-5 mt-5 mx-auto w-max">
              <CreateTask />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label className="text-sm text-slate-500 w-max">Tasks</label>
                  <label className="text-sm text-slate-500 w-max">{unFinishedTasks.length} Remaining Task(s)</label>
                </div>
                <TasksList />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label className="text-sm text-slate-500 w-max">Finished Tasks</label>
                  <label className="text-sm text-slate-500 w-max">{finishedTasks.length} Done</label>
                </div>
                <TasksListFinished />
              </div>
              <ClearTasks />
            </div>
          </TaskContext.Provider>
        </div>
      </HomeLayout>
    </>
  )
}

export default TodoPage
