import { initializeFirebase } from "@utils/utils"
import TodoPage from "@pages/todo"

initializeFirebase()

const App = () => {
  return <TodoPage />
}

export default App
