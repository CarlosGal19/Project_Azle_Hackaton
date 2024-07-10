import { Link } from "react-router-dom";
import { InternetIdentityButton, useAuth, LogoutButton } from "@bundly/ares-react";

const Nav = () => {

    const { currentIdentity, isAuthenticated } = useAuth();

  return (
    <nav className="flex mb-8 mt-4">
        <div className="w-4/5 my-auto">
            <ul className="flex justify-evenly font-bold text-3xl text-blue-900">
                <li><Link to='/'><img src="./aquanova.png" alt="AquaNova Home" className="w-24" /></Link></li>
                <li className="lg:my-auto hidden lg:block"><Link to='/initial'>Initial Test</Link></li>
                <li className="lg:my-auto hidden lg:block"><Link to='/final'>Final Test</Link></li>
                <li className="lg:my-auto hidden lg:block"><Link to='/test'>Test</Link></li>
                <li className="lg:my-auto hidden lg:block"><Link to='/suggest'>Suggestions</Link></li>
            </ul>
        </div>
        <div className="flex w-1/5 justify-center">
        {
            isAuthenticated ?
            <LogoutButton identity={currentIdentity} /> :
            <InternetIdentityButton />
        }
        </div>
    </nav>
  )
}

export default Nav;
