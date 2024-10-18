import Logo from "../public/logo.png"
import Image from "next/image"

export default function Header(){
    return(
        <div className="header">
            <div className="navbar">
              
                <ul className="header-button">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                <div className="logo">
               <Image src={Logo} alt="Logo" height={90} />
               </div>
            </div>
            <hr className="line" />
        </div>
        
    )
}