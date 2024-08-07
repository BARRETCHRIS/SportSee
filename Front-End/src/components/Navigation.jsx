import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import logoName from '../assets/logoTitle.svg';
// import { ReactComponent as logo } from '../assets/logo.svg'; // Importer SVG comme composant

function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/sitting">Réglages</Link></li>
            <li><Link to="/community">Communauté</Link></li>
        </ul>
    </nav>
  );
}

export default Navigation;