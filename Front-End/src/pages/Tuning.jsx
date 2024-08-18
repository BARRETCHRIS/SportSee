import React from 'react';

/**
 * Render the tuning page for the SportSee application.
 *
 * This component sets the document title for the tuning page and displays a message indicating that the page is under development.
 *
 * @component
 * @category Pages
 * @returns { React.Component } A React component
 */
function Tuning() {
    // Set the document title for the tuning page
    document.title = 'SportSee Sitting';

    return (
        <main>
            <h2>Page Réglage<br />En cours de développement</h2>
            <h2>Sitting page<br />Under development</h2>
        </main>
    );
}

export default Tuning;
