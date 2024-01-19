import { TabsTrigger } from "@/components/ui"
import Priority from "../../types/Priority"

interface TabTriggerProps {
  priority: Priority
  label: string
}

const TabTrigger = ({ priority, label }: TabTriggerProps) => {
  const setColor = () => {
    switch (priority) {
      case Priority.Blank:
        return "bg-slate-950"
      case Priority.Highest:
        return "bg-red-500"
      case Priority.Medium:
        return "bg-orange-500"
      case Priority.Lowest:
        return "bg-green-400"
    }
  }

  const className = `gap-2 pt-0 pb-2 rounded-none shadow-none data-[state=active]:border-b-slate-950 data-[state=active]:border-b-[1px] data-[state=active]:scale-105`

  return (
    <TabsTrigger value={priority} className={className}>
      <span className={`w-2 h-2 ${setColor()} rounded-full`}></span>
      {label}
    </TabsTrigger>
  )
}

export default TabTrigger
