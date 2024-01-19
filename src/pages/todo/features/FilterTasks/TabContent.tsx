import { TabsContent } from "@/components/ui"
import Priority from "../../types/Priority"

interface TabContentProps {
  tasks: Task[]
  priority: Priority
}

const TabContent = ({ tasks }: TabContentProps) => {
  return <TabsContent value={Priority.Blank}></TabsContent>
}

export default TabContent
