import React from 'react';

// Import style
import './asideNav.scss';

// Import svg _ Import des svg
import Yoga from '../../assets/Yoga.svg';
import swim from '../../assets/swim.svg';
import bike from '../../assets/bike.svg';
import bodybuild from '../../assets/bodybuild.svg';

function AsideNav() {
  return (
    <aside className='aside'> 
        <div className="aside_wrap">
            <button className="aside_wrap_button">
                <img src={Yoga} alt="icone d'une personne assise en lotus" />
            </button>
            <button className="aside_wrap_button">
                <img src={swim} alt="icone d'une personne qui nage" />
            </button>
            <button className="aside_wrap_button">
                <img src={bike} alt="icone d'une personne qui fait du vélo" />
            </button>
            <button className="aside_wrap_button">
                <img src={bodybuild} alt="icone d'une altère" />
            </button>
        </div>
        <p className='aside_copyright'>Copyright, SportSee 2024</p>
    </aside>
  );
}

export default AsideNav;