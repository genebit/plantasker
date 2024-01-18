import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui"
import { X } from "lucide-react"

interface DiscardEditingTaskProps {
  toggleEditing: () => void
}

const DiscardEditingTask = ({ toggleEditing }: DiscardEditingTaskProps) => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            className="p-3 transition-opacity opacity-50 active:scale-90 hover:opacity-100"
            variant={"ghost"}
            onClick={toggleEditing}
          >
            <X size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Discard Editing</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default DiscardEditingTask
