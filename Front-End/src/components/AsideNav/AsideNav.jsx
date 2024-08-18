import React from 'react';

// Import stylesheet for the component
import './asideNav.scss';

// Import SVG icons
import Yoga from '../../assets/Yoga.svg';
import swim from '../../assets/swim.svg';
import bike from '../../assets/bike.svg';
import bodybuild from '../../assets/bodybuild.svg';

/**
 * AsideNav Component
 * 
 * This component renders a vertical navigation sidebar with icons representing different physical activities.
 * Each icon is wrapped in a button for potential future interactivity.
 *
 * @category Components
 * @component
 * @returns {React.Component} A React component displaying the sidebar with activity icons.
 */
function AsideNav() {
  return (
    <aside className='aside'>
        {/* Wrapper div for the navigation buttons */}
        <div className="aside_wrap">
            {/* Yoga icon button */}
            <button className="aside_wrap_button">
                <img src={Yoga} alt="icone d'une personne assise en lotus" />
            </button>
            {/* Swimming icon button */}
            <button className="aside_wrap_button">
                <img src={swim} alt="icone d'une personne qui nage" />
            </button>
            {/* Biking icon button */}
            <button className="aside_wrap_button">
                <img src={bike} alt="icone d'une personne qui fait du vélo" />
            </button>
            {/* Bodybuilding icon button */}
            <button className="aside_wrap_button">
                <img src={bodybuild} alt="icone d'une altère" />
            </button>
        </div>
        {/* Copyright notice at the bottom of the sidebar */}
        <p className='aside_copyright'>Copyright, SportSee 2024</p>
    </aside>
  );
}

export default AsideNav;
