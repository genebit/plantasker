import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui"
import { Trash } from "lucide-react"
import TaskContext from "../../contexts/TaskContext"
import { useContext } from "react"

interface DeleteTaskProps {
  task: Task
}

const DeleteTask = ({ task }: DeleteTaskProps) => {
  const tasksContext = useContext(TaskContext)

  const deleteTask = () => tasksContext?.deleteTask!(task.id)

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            className="p-3 transition-opacity opacity-50 active:scale-90 hover:opacity-100 hover:text-red-500"
            variant={"ghost"}
            onClick={deleteTask}
          >
            <Trash size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-white bg-destructive">
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default DeleteTask
