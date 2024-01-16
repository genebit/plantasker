import { initializeFirebase, setTabTag } from "@lib/utils"
import { Toaster } from "@components/ui/sonner"
import Footer from "@pages/todo/components/Footer/Footer"
import TodoPage from "@pages/todo"

// set config
initializeFirebase()
setTabTag()

const App = () => {
  return (
    <>
      <div className="relative min-h-screen duration-500 animate-fade-in">
        <main className="container flex flex-col min-h-screen items-center justify-center gap-5">
          <TodoPage />
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  )
}

export default App
