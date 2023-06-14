import Navbar from "./components/navbar";

type Props = { className?: string };

const Header: React.FC<Props> = ({className}) => (
    <header className={className += " flex w-full"}>
        <Navbar />
    </header>
)

export default Header;

