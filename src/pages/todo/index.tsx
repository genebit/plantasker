import { useState } from "react"

import logo from "@/assets/brands/64x64.png"
import { TasksList, TasksListFinished } from "@/pages/todo/components"
import { CreateTask, Tree } from "@/pages/todo/features"
import { useTodo } from "@/pages/todo/hooks/useTodo"
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react"
import TaskContext from "./contexts/TaskContext"
import ClearTasks from "./features/ClearTasks"
import { Button } from "@/components/ui"

const TodoPage = () => {
  const { tasks, getTasks, addTask, updateTask, tickTask, deleteTask, clearTasks } = useTodo()
  const [hideTree, setHideTree] = useState(false)
  const [hideFinishedTasks, setHideFinishedTasks] = useState(true)

  const unFinishedTasks = tasks.filter((task) => !task.done)
  const finishedTasks = tasks.filter((task) => task.done)
  const completionPercentage = Math.round((finishedTasks.length / tasks.length) * 100)

  const toggleTree = () => setHideTree(!hideTree)
  const toggleFinishedTasks = () => setHideFinishedTasks(!hideFinishedTasks)

  getTasks()

  return (
    <div className="container">
      <header className="mx-auto w-max">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 font-inter-900">Plantasker</h2>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-1 mx-auto w-max">
          <span className="text-slate-500">{Number.isNaN(completionPercentage) ? 0 : completionPercentage}% •</span>
          <Button onClick={toggleTree} size={"sm"} variant={"ghost"} className="gap-2 px-2 text-slate-500">
            {hideTree ? (
              <>
                <Eye /> Show Tree
              </>
            ) : (
              <>
                <EyeOff /> Hide Tree
              </>
            )}
          </Button>
        </div>
      </header>
      <TaskContext.Provider value={{ tasks, addTask, updateTask, tickTask, deleteTask, clearTasks }}>
        <Tree hideTree={hideTree} />
        <div className="flex flex-col justify-center gap-5 mx-auto mt-5 w-max">
          <CreateTask />
          <section>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  className="gap-1 px-2 text-sm text-slate-500"
                  onClick={toggleFinishedTasks}
                >
                  Tasks
                  {hideFinishedTasks ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
                <label className="text-sm text-slate-500 w-max">{unFinishedTasks.length} Remaining Task(s)</label>
              </div>
              {hideFinishedTasks ? <TasksList /> : null}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  className="gap-1 px-2 text-sm text-slate-500"
                  onClick={toggleFinishedTasks}
                >
                  Finished Tasks
                  {hideFinishedTasks ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </Button>
                <label className="text-sm text-slate-500 w-max">{finishedTasks.length} Done</label>
              </div>
              {!hideFinishedTasks ? <TasksListFinished /> : null}
            </div>
          </section>
          <ClearTasks />
        </div>
      </TaskContext.Provider>
    </div>
  )
}

export default TodoPage
