// Import component
import Nav from "../Nav/Nav";

// Import svg
import logo from '../../assets/logo.svg';
import logoName from '../../assets/logoTitle.svg';

// Import style
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header_wrap">
                <img className="header_wrap_logo" src={logo} logo={true} alt="Logo" />
                <h1 className="header_wrap_title">
                    <img src={logoName} alt="SportSee écrit en rouge" aria-label="SportSee, Votre compagnon de suivie sportif"/>
                </h1>
            </div>
            <Nav/>
        </header>
    )    
}

export default Header