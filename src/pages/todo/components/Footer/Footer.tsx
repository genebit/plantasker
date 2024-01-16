import { Badge } from "@components/ui"

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-5 left-5">
        {import.meta.env.DEV ? (
          <Badge variant={"destructive"} className="mb-3">
            Dev. Mode
          </Badge>
        ) : null}
        <p className="text-slate-500">Gene Bitara © {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Footer
