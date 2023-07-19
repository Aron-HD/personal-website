import Image from 'next/image'

type Props = { className?: string }

const Footer: React.FC<Props> = ({ className }) => (
    <footer className={className + " grid w-full text-xs p-[3px] gap-0 grid-rows-2 place-items-center"}>
        <span className="py-6">
            © {new Date().getFullYear()} aronhd
        </span>
        <div className="grid place-items-center">
            <Image
                className="relative text-transparent invert-0 h-[20px] w-[auto] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-accent-dark text-accent-light"
                src="/next.svg"
                alt="Next.js Logo"
                width={98.5}
                height={20}
                unoptimized={true} 
                style={{ filter: 'invert(0)', color: 'transparent' }}
            />
        </div>
    </footer>
)

export default Footer;