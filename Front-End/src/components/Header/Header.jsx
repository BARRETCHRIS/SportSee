// Import the Nav component for navigation links
import Nav from "../Nav/Nav";

// Import logo images
import logo from '../../assets/logo.svg';
import logoName from '../../assets/logoTitle.svg';

// Import the styles for the header component
import './header.scss';

/**
 * Header Component
 * 
 * This component renders the header of the application, including the logo, title, and navigation.
 * The header is typically placed at the top of the page and contains branding elements as well as navigation links.
 * 
 * @category Components
 * @component
 * @returns {React.Component} A React component that displays the application's header.
 */
function Header() {
    return (
        <header className="header">
            {/* Wrapper div for the logo and title */}
            <div className="header_wrap">
                {/* Logo image */}
                <img className="header_wrap_logo" src={logo} alt="Logo" />
                
                {/* Title with logo text image */}
                <h1 className="header_wrap_title">
                    <img src={logoName} alt="SportSee écrit en rouge" aria-label="SportSee, Votre compagnon de suivi sportif"/>
                </h1>
            </div>
            
            {/* Navigation component containing the site’s navigation links */}
            <Nav/>
        </header>
    )    
}

export default Header;
