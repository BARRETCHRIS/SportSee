import React from 'react';

/**
 * Render the community (Cluster) page for the SportSee application.
 *
 * This component sets the document title to 'SportSee Community' and displays a message indicating that the community page is under development.
 *
 * @component
 * @category Pages
 * @returns { React.Component } A React component
 */
function Cluster() {
  // Set the document title for the community page
  document.title = 'SportSee Community';

  return (
    <main>
      <h2>Page Communauté <br /> En cours de développement</h2>
      <h2>Community page <br /> Under development</h2>
    </main>
  );
}

export default Cluster;