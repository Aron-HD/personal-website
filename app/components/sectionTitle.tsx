import { PropsWithChildren } from "react"

interface SectionTitleProps extends PropsWithChildren {
  n: number
}

const SectionTitle = ({ n, children }: SectionTitleProps) => (
  <h2 className="text-3xl text-text font-heading font-bold dark:text-accent-dark text-text-light">
    <span className="static font-monospace dark:text-primary-dark text-accent-dark opacity-90 mr-1">
      0{n}.
    </span>
    {children}
  </h2>
)

export default SectionTitle;