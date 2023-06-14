import Image from 'next/image'

type Props = { className?: string }

const Footer: React.FC<Props> = ({ className }) => (
    <footer className={className + " grid w-full text-xs p-[3px] gap-0 grid-rows-2 place-items-center"}>
        <span className="py-6">
            © {new Date().getFullYear()} aronhd
        </span>
        <div className="grid place-items-center">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-accent-dark text-accent-light"
                src="/next.svg"
                alt="Next.js Logo"
                width={50}
                height={30}
                priority
            />
        </div>
    </footer>
)

export default Footer;