import Navbar from "./components/navbar";

const Header = ({ scrollFuncs }: ScrollFuncsProps) => (
    <header className="flex w-full"><Navbar scrollFuncs={scrollFuncs} /></header>
)

export default Header;

