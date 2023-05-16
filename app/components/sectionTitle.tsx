import { ReactNode } from "react"

interface SectionTitleProps {
  n: number
  children: ReactNode
}

export default ({ n, children }: SectionTitleProps) => (
  <h2 className="text-text font-heading font-black">
    <span className="static font-monospace text-primary opacity-90 mr-1">
      0{n}.
    </span>
    {children}
  </h2>
)
