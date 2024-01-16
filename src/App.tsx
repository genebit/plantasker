import { initializeFirebase } from "@utils/utils"
import { Toaster } from "@components/ui/sonner"
import Footer from "@/pages/todo/components/Footer/Footer"
import TodoPage from "@pages/todo"
import { useEffect } from "react"

initializeFirebase()

const App = () => {
  useEffect(() => {
    if (import.meta.env.DEV) document.title = "Plantasker (Dev.)"
    if (import.meta.env.PROD) document.title = "Plantasker"
  }, [])

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
