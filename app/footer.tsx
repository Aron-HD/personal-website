import Image from 'next/image'
// import Social from './components/social'

export default () => (
    <footer className="grid text-xs p-[3px] gap-0 place-items-center">
        {/* <Social /> */}
        <span className="py-6">
            © Aron Davidson, {new Date().getFullYear()}
        </span>
        <div className="grid grid-cols-2 gap-6 place-items-center">
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={24}
                priority
            />
        </div>
    </footer>
)

