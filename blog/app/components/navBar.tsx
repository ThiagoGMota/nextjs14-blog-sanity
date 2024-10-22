import Link from "next/link";
import { ModeToggle } from "./modeToggle";

const NavBar = () => {
    return(
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl">
                Thiago<span className="text-purple-600">Blog</span>
            </Link>
          {/*   {
                ["Home", "Menu", "Sobre", "Contato"].map((item) => (
                    <div key={item}>
                        <Link 
                            href={`#${item.toLowerCase()}`} 
                            className=" hover:text-[#d4a574] transition duration-300"
                        >		
                            {item}
                        </Link>
                    </div>
                ))
            } */}
            <ModeToggle/>

        </nav>
    )
}
export default NavBar;