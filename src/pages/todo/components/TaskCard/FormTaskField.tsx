import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from "react"
import DeleteTask from "./DeleteTask"
import DiscardEditingTask from "./DiscardEditingTask"
import TaskContext from "../../contexts/TaskContext"
import { toast } from "sonner"
import playAudio from "../../utils/playAudio"
import { trashSFX } from "@/lib/constants"
import TaskEditingContext from "./TaskEditingContext"

interface FormTaskFieldProps {
  task: Task
}

const FormTaskField = ({ task }: FormTaskFieldProps) => {
  // boolean values for setting the icon and
  // crossing out the lable for the checkbox
  const tasksContext = useContext(TaskContext)
  const taskEditingContext = useContext(TaskEditingContext)

  const [taskDescription, setTaskDescription] = useState(task.description)

  // to automatically show the cursor upon editing
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (taskEditingContext?.editing && inputRef.current) {
      inputRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (taskEditingContext?.editing && e.key === "Escape") {
        taskEditingContext.setEditing(false)
      }
    }

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown)

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [taskEditingContext?.editing])

  // form inputfield for editing onchange event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTaskDescription(e.target.value)

  // on form submit -> update the task
  const updateTask = (e: FormEvent<HTMLFormElement>) => {
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
    tasksContext?.updateTask!(task)

    // cancel editing
    taskEditingContext?.setEditing(false)
  }

  const toggleEditing = () => taskEditingContext?.setEditing(!taskEditingContext.editing)

  return (
    <form onSubmit={updateTask} className="flex w-full">
      <input
        type="text"
        defaultValue={task.description}
        ref={inputRef}
        onChange={handleChange}
        className="text-sm border-b-[1px] w-[19rem] outline-none border-b-slate-950 active:border-none focus:outline-none"
      />
      <DiscardEditingTask toggleEditing={toggleEditing} />
      <DeleteTask task={task} />
    </form>
  )
}

export default FormTaskField
