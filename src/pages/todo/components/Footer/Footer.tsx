import { Badge } from "@/components/ui"
import logo from "@/assets/brands/64x64.png"

const Footer = () => {
  return (
    <footer className="absolute bottom-5 left-5">
      {import.meta.env.DEV ? <Badge variant={"destructive"}>Dev. Mode</Badge> : null}
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 font-inter-900">Plantasker</h2>
        <img src={logo} alt="" />
      </div>
      <p className="text-slate-500">Gene Bitara © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
