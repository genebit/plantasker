import Footer from "@pages/todo/components/Footer"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen">
        <main className="container flex flex-col justify-center gap-5">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout
