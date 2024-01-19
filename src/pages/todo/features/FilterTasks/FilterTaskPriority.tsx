import { Tabs, TabsList } from "@/components/ui"
import { useContext } from "react"
import TaskContext from "../../contexts/TaskContext"
import TabTrigger from "./TabsTrigger"
import Priority from "../../types/Priority"
import { getTasksFromLocalStorage } from "../../utils"

const FilterTaskPriority = () => {
  const taskContext = useContext(TaskContext)

  const filter = (value: string) => {
    const tasksFromLocalStorage: Task[] = getTasksFromLocalStorage()
    // Sort tasks by id in descending order
    const sortedTasks = tasksFromLocalStorage.sort((a, b) => b.id - a.id)
    const filteredTasks = sortedTasks?.filter((task) => task.priority === value) || []

    taskContext?.setTasks!(value.length === 0 ? tasksFromLocalStorage : filteredTasks)
  }

  return (
    <Tabs defaultValue="" className="w-max" onValueChange={filter}>
      <TabsList className="justify-between bg-transparent w-100">
        <TabTrigger priority={Priority.Blank} label="All" />
        <TabTrigger priority={Priority.Highest} label="Highest" />
        <TabTrigger priority={Priority.Medium} label="Medium" />
        <TabTrigger priority={Priority.Lowest} label="Lowest" />
      </TabsList>
    </Tabs>
  )
}

export default FilterTaskPriority
