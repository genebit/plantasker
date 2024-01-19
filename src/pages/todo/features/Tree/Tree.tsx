import { useContext, useEffect, useState } from "react"

import { tree20, tree40, tree60, tree80, tree100 } from "@/assets/tree/growth"
import TaskContext from "@/pages/todo/contexts/TaskContext"
import { getTasksFromLocalStorage } from "../../utils"

interface TreeProps {
  hideTree: boolean
}

const Tree = ({ hideTree }: TreeProps) => {
  const context = useContext(TaskContext)
  const tasksFromLocalStorage: Task[] = getTasksFromLocalStorage()

  const finishedTasks = tasksFromLocalStorage.filter((task) => task.done)
  const points = Math.round(((finishedTasks?.length ?? 0) / (tasksFromLocalStorage.length ?? 0)) * 100)

  const [treeGrowth, setTreeGrowth] = useState(tree20)

  useEffect(() => {
    function growth() {
      if (points >= 0 && points <= 20) setTreeGrowth(tree20)
      if (points >= 21 && points <= 40) setTreeGrowth(tree40)
      if (points >= 41 && points <= 60) setTreeGrowth(tree60)
      if (points >= 61 && points <= 80) setTreeGrowth(tree80)
      if (points >= 81 && points <= 100) setTreeGrowth(tree100)
    }
    growth()
  }, [context?.tasks, points])

  return <>{!hideTree ? <img src={treeGrowth} alt="Tree" className="mx-auto mb-1 w-max animate-fade-in" /> : null}</>
}

export default Tree
