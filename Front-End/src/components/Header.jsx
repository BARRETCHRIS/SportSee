import Navigation from "./Navigation";
import logo from '../assets/logo.svg';
import logoName from '../assets/logoTitle.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} logo={true} alt="Logo" />
            <h1 className="first-title">
                <img src={logoName} className="logo" alt="SportSee écrit en rouge" aria-label="SportSee, Votre compagnon de suivie sportif"/>
            </h1>
            <Navigation />
        </header>
    )    
}

export default Header