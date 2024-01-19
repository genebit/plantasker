import { useContext } from "react"

import {
  Button,
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui"
import TaskContext from "@/pages/todo/contexts/TaskContext"

const ClearTasks = () => {
  const context = useContext(TaskContext)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="mx-auto w-max"
          size={"sm"}
          variant={"destructive"}
          disabled={context?.tasks.length === 0 ? true : false}
        >
          Clear Finished Tasks
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete all Tasks?</DialogTitle>
          <DialogDescription>Are you sure you want to delete your entire tasks?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant={"ghost"}>
              No
            </Button>
          </DialogClose>
          <Button type="submit" variant={"destructive"} onClick={context?.clearTasks}>
            Yes, proceed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ClearTasks
