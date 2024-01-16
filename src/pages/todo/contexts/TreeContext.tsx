import { Dispatch, SetStateAction, createContext } from "react"

interface HideTreeState {
  hideTree: boolean
  setHideTree: Dispatch<SetStateAction<boolean>>
}

const TreeContext = createContext<HideTreeState | undefined>(undefined)

export default TreeContext
