import { Link } from 'react-router-dom';

/**
 * Render the 404 error page for the SportSee application.
 *
 * This component sets the document title to 'SportSee Error' and displays a 404 error message indicating that the requested page does not exist.
 * It also provides a link for the user to return to the homepage.
 *
 * @component
 * @category Pages
 * @returns { React.Component } A React component
 */
function Error404() {
    // Set the document title for the error page
    document.title = 'SportSee Error';

    return (
        <main>
            <h2>404<br />Oups! La page que vous demandez n'existe pas.</h2>
            <h2>404<br />Oops! The page you are requesting doesn't exist.</h2>
            <Link to="/" className='error_link'>
                Retourner sur la page d’accueil<br />Return to home page
            </Link>
        </main>
    );
}

export default Error404;
