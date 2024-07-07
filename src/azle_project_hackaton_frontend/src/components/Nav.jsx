import { Link } from "react-router-dom"
import { InternetIdentityButton, useAuth, LogoutButton } from "@bundly/ares-react";


const Nav = () => {

    const { currentIdentity, isAuthenticated } = useAuth();

  return (
    <nav className="flex">
        <div className="w-4/5 my-auto">
            <ul className="flex justify-evenly">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/initial'>Initial Test</Link></li>
                <li><Link to='/final'>Final Test</Link></li>
                <li><Link to='/test'>Test</Link></li>
                <li><Link to='/suggest'>Suggestions</Link></li>
                <li><Link to='/about'>About us</Link></li>
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

export default Nav
