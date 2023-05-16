import Navbar from "./components/navbar";

export default ({ scrollFuncs }: ScrollFuncsProps) => (
    <header className="flex w-full"><Navbar scrollFuncs={scrollFuncs} /></header>
)

