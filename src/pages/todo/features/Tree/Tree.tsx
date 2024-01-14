import { useContext, useEffect, useState } from "react"

import { tree20, tree40, tree60, tree80, tree100 } from "@assets/tree/growth"
import TaskContext from "@pages/todo/contexts/TaskContext"

function Tree() {
  const context = useContext(TaskContext)
  const finishedTasks = context?.tasks.filter((task) => task.done)

  const points = finishedTasks?.length ?? 0

  const [treeGrowth, setTreeGrowth] = useState(tree20)

  useEffect(() => {
    function growth() {
      if (points >= 0 && points <= 5) setTreeGrowth(tree20)
      if (points >= 6 && points <= 10) setTreeGrowth(tree40)
      if (points >= 11 && points <= 20) setTreeGrowth(tree60)
      if (points >= 21 && points <= 30) setTreeGrowth(tree80)
      if (points >= 31 && points <= 40) setTreeGrowth(tree100)
    }
    growth()
  }, [context?.tasks, points])

  return (
    <>
      <img src={treeGrowth} alt="Tree" className="mx-auto mb-5 w-max" />
    </>
  )
}

export default Tree
