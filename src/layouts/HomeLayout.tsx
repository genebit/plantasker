import { Toaster } from "@components/ui/sonner"
import Footer from "@/pages/todo/components/Footer/Footer"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen duration-500 animate-fade-in">
        <main className="container flex flex-col min-h-screen items-center justify-center gap-5">{children}</main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  )
}

export default HomeLayout
