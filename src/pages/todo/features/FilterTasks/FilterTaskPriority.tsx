import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"
import { useContext } from "react"
import TaskContext from "../../contexts/TaskContext"
import TabTrigger from "./TabsTrigger"
import Priority from "../../types/Priority"

const FilterTaskPriority = () => {
  const taskContext = useContext(TaskContext)

  const filter = (value: string) => {
    const originalTasks = taskContext?.tasks || []

    const filteredTasks = originalTasks?.filter((task) => task.priority === value) || []

    console.log(originalTasks, filteredTasks)
  }

  return (
    <Tabs defaultValue="" className="w-full" onValueChange={filter}>
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
