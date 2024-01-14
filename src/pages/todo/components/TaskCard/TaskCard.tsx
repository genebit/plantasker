import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from "react"

import { Button, Checkbox } from "@components/ui"
import { DeleteTask } from "@pages/todo/features"
import EditTaskContext from "@pages/todo/contexts/EditTaskContext"
import { toast } from "sonner"
import { Edit2, X } from "lucide-react"
import { getTasksFromLocalStorage } from "@pages/todo/utils"
import TaskContext from "@pages/todo/contexts/TaskContext"
import Task from "@pages/todo/types/interfaces/task"
import { clickSFX, trashSFX } from "@constants/constants"
import playAudio from "@/pages/todo/utils/playAudio"

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }) => {
  // boolean values for setting the icon and
  // crossing out the lable for the checkbox
  const [editing, setEditing] = useState(false)
  const tasksContext = useContext(TaskContext)

  //
  const [taskDescription, setTaskDescription] = useState(task.description)

  // to automatically show the cursor upon editing
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (editing && e.key === "Escape") {
        setEditing(false)
      }
    }

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown)

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [editing])

  // form inputfield for editing onchange event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTaskDescription(e.target.value)

  // toggle the state for the icon button
  const toggleButton = () => setEditing(!editing)

  // on form submit -> update the task
  function updateTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // validate the task
    if (taskDescription.trim().length === 0) {
      toast.error("Invalid task", {
        description: "Please fill in the required field.",
        dismissible: true,
        action: { label: "Close", onClick: () => null },
      })

      playAudio(trashSFX)

      // clear the form
      setTaskDescription("")

      return
    }

    // if it's validated, then create the task
    // 1. modify the task description
    task.description = taskDescription

    // 2. update to the localstorage
    localStorage.setItem(task.id.toString(), JSON.stringify(task))

    // cancel editing
    setEditing(false)
  }

  function tickTask(e: boolean) {
    task.done = e

    localStorage.setItem(task.id.toString(), JSON.stringify(task))

    // 3. refresh the fetching tasks
    // fetch the updated tasks from localStorage
    const newTasks = getTasksFromLocalStorage()

    // 4. update the state with the new tasks
    tasksContext?.setTasks(newTasks)

    playAudio(clickSFX)
  }

  return (
    <EditTaskContext.Provider value={{ editing, setEditing }}>
      <div className="flex justify-between animate-fade-in">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`task-${task.id}`}
            disabled={editing ? true : false}
            onCheckedChange={tickTask}
            checked={task.done}
          />
          {editing ? (
            <form onSubmit={updateTask}>
              <input
                type="text"
                defaultValue={task.description}
                ref={inputRef}
                onChange={handleChange}
                className="text-sm border-b-[1px] w-[18rem] outline-none border-b-slate-950 active:border-none focus:outline-none"
              />
            </form>
          ) : (
            <label
              className={`text-sm py-1 font-medium w-[18rem] whitespace-nowrap overflow-x-hidden overflow-ellipsis leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                task.done ? "line-through" : ""
              }`}
              onDoubleClick={() => setEditing(true)}
            >
              {task.description}
            </label>
          )}
        </div>
        <div className="flex gap-1">
          <Button className="p-3 active:scale-90" variant={"ghost"} onClick={toggleButton}>
            {editing ? <X size={16} /> : <Edit2 size={16} />}
          </Button>
          <DeleteTask id={task.id} />
        </div>
      </div>
    </EditTaskContext.Provider>
  )
}

export default TaskCard
