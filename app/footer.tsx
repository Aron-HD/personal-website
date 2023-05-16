import Image from 'next/image'
// import Social from './components/social'

const Footer = () => (
    <footer className="grid w-full mb-10 text-xs p-[3px] gap-0 place-items-center">
        {/* <Social /> */}
        <span className="py-6">
            © {new Date().getFullYear()} aronhd
        </span>
        <div className="grid place-items-center">
            {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            /> */}
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={50}
                height={10}
                priority
            />
        </div>
    </footer>
)

export default Footer;