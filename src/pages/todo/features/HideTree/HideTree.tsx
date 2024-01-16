import { Button } from "@components/ui"
import { Eye, EyeOff } from "lucide-react"
import { useContext } from "react"
import TreeContext from "@pages/todo/contexts/TreeContext"

const HideTree = () => {
  const treeContext = useContext(TreeContext)

  const toggleTree = () => treeContext?.setHideTree(!treeContext.hideTree)

  return (
    <>
      <Button onClick={toggleTree} size={"sm"} variant={"ghost"} className="gap-2 px-2 text-slate-500">
        {treeContext?.hideTree ? (
          <>
            <Eye /> Show Tree
          </>
        ) : (
          <>
            <EyeOff /> Hide Tree
          </>
        )}
      </Button>
    </>
  )
}

export default HideTree
