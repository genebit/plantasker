import { useState } from "react"

import { TasksList, TasksListFinished } from "@/pages/todo/components"
import { CreateTask, Tree } from "@/pages/todo/features"
import { useTodo } from "@/pages/todo/hooks/useTodo"
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react"
import TaskContext from "./contexts/TaskContext"
import ClearTasks from "./features/ClearTasks/ClearTasks"
import { Button } from "@/components/ui"
import FilterTaskPriority from "./features/FilterTasks/FilterTaskPriority"

const TodoPage = () => {
  const { tasks, getFinishedTasks, getTasks, setTasks, addTask, updateTask, tickTask, deleteTask, clearTasks } =
    useTodo()
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
      <TaskContext.Provider
        value={{ tasks, getFinishedTasks, addTask, setTasks, updateTask, tickTask, deleteTask, clearTasks }}
      >
        <Tree hideTree={hideTree} />
        <div className="mx-auto w-max">
          <div className="flex items-center gap-1 mx-auto w-max">
            <span className="text-slate-500">{Number.isNaN(completionPercentage) ? 0 : completionPercentage}% •</span>
            <Button onClick={toggleTree} size={"sm"} variant={"ghost"} className="gap-2 px-2 text-slate-500">
              {hideTree ? (
                <>
                  <Eye size={16} /> Show Tree
                </>
              ) : (
                <>
                  <EyeOff size={16} /> Hide Tree
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 mx-auto mt-3 w-max">
          <CreateTask />
          <FilterTaskPriority />
          <div>
            <section>
              <div className="flex flex-col border-b-[1px]">
                <div className="flex justify-between border-b-[1px]">
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
            </section>
            <section>
              <div className="flex flex-col border-b-[1px]">
                <div className="flex items-center justify-between border-b-[1px]">
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
          </div>
          <ClearTasks />
        </div>
      </TaskContext.Provider>
    </div>
  )
}

export default TodoPage
