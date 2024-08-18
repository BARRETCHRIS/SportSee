import React from 'react';
import { useUserSelector } from '../../context/UserSelector';

import './home.scss';

/**
 * Render the home page for the SportSee application.
 *
 * This component allows the user to select a profile by checking a checkbox. The selected profile ID is managed using the `UserSelectorContext`.
 * It also sets the document title and displays a message indicating that the home page is under development.
 *
 * @component
 * @category Pages
 * @returns { React.Component } A React component
 */
function Home() {
    // Set the document title for the home page
    document.title = 'SportSee Home';

    // Get the current selected user ID and the function to switch user IDs from the context
    const { selectedUserID, handleSwitchID } = useUserSelector();

    /**
     * Handle the change event for the profile selection checkboxes.
     *
     * This function updates the selected user ID based on the checkbox state.
     * If the checkbox for the currently selected user is unchecked, it will deselect the user.
     * Otherwise, it will set the new user ID.
     *
     * @param {String} id - The ID of the profile to select or deselect.
     */
    const handleCheckboxChange = (id) => {
        handleSwitchID(id === selectedUserID ? null : id);
    };

    return (
        <main>
            <section className='HomeUserChoise'>
                <h2>Choisissez un profil et<br />cliquez sur Profil dans la navigation</h2>
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
