import { initializeFirebase, setTabTag } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/pages/todo/components/Footer/Footer"
import TodoPage from "@/pages/todo"

// set config
initializeFirebase()
setTabTag()

const App = () => {
  return (
    <>
      <div className="relative min-h-screen duration-500 animate-fade-in">
        <main className="container flex flex-col items-center justify-center min-h-screen gap-5">
          <TodoPage />
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  )
}

export default App
