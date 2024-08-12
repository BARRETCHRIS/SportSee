import React from 'react';
import { useUserSelector } from '../../context/UserSelector';

import './Home.scss'

function Home() {
    document.title = 'SportSee Home';
    const { selectedUserID, handleSwitchID } = useUserSelector();

    const handleCheckboxChange = (id) => {
        handleSwitchID(id === selectedUserID ? null : id);
    };

    return (
        <main>
            <section className='HomeUserChoise'>
                <h2>Choisissez un profil et<br />cliquer sur Profil dans la navigation</h2>
                <fieldset>
                    <label className='HomeUserChoise_label'>
                    Karl (Profile ID 12) : 
                        <input
                            className='HomeUserChoise_label_input'
                            type="checkbox"
                            checked={selectedUserID === '12'}
                            onChange={() => handleCheckboxChange('12')}
                        />
                    </label>
                    <label className='HomeUserChoise_label'>
                        Cecilia (Profile ID 18) :
                        <input
                            className='HomeUserChoise_label_input'
                            type="checkbox"
                            checked={selectedUserID === '18'}
                            onChange={() => handleCheckboxChange('18')}
                        />
                    </label>
                </fieldset>
                
            </section>
            
            <h2>Page Accueil <br /> En cours de développement</h2>
            <h2>Home page <br /> Under development</h2>
        </main>
    );
}

export default Home;