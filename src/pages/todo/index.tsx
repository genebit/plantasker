import { useEffect, useState } from "react"

import logo from "@/assets/brands/64x64.png"
import { TasksList, TasksListFinished } from "@/pages/todo/components"
import { getTasksFromLocalStorage } from "@/pages/todo/utils"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import ClearTasks from "@/pages/todo/features/ClearTasks/ClearTasks"
import { CreateTask, Tree } from "@/pages/todo/features"
import TreeContext from "@/pages/todo/contexts/TreeContext"
import HideTree from "@/pages/todo/features/HideTree/HideTree"

const TodoPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [hideTree, setHideTree] = useState(false)

  const unFinishedTasks = tasks.filter((task) => !task.done)
  const finishedTasks = tasks.filter((task) => task.done)

  // progress bar
  const completionPercentage = Math.round((finishedTasks.length / tasks.length) * 100)

  useEffect(() => {
    const tasksFromLocalStorage: ITask[] = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
  }, [])

  return (
    <>
      <div className="container">
        <header className="mx-auto mt-5 w-max">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 font-inter-900">Plantasker</h2>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-1 mx-auto w-max">
            <div className="flex gap-3">
              <span className="text-slate-500">{Number.isNaN(completionPercentage) ? 0 : completionPercentage}%</span>
              <span className="text-slate-500">•</span>
            </div>
            <TreeContext.Provider value={{ hideTree, setHideTree }}>
              <HideTree />
            </TreeContext.Provider>
          </div>
        </header>
        <TaskContext.Provider value={{ tasks, setTasks }}>
          <TreeContext.Provider value={{ hideTree, setHideTree }}>
            <Tree />
          </TreeContext.Provider>
          <div className="flex flex-col justify-center gap-5 mx-auto mt-5 w-max">
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
    </>
  )
}

export default TodoPage
