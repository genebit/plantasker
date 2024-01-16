import { initializeFirebase } from "@utils/utils"
import TodoPage from "@pages/todo"
import { useEffect } from "react"

initializeFirebase()

const App = () => {
  useEffect(() => {
    if (import.meta.env.DEV) document.title = "Plantasker (Dev.)"
    if (import.meta.env.PROD) document.title = "Plantasker"
  }, [])

  return <TodoPage />
}

export default App
