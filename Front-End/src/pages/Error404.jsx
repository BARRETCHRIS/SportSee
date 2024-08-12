import { Link } from 'react-router-dom';

function Error404() {
    document.title = 'SportSee Error';
    return (
        <main>
            <h2>404<br />Oups! La page que vous demandez n'existe pas.</h2>
            <h2>404<br />Oops! The page you are requesting doesn't exist.</h2>
            <Link to="/" className='error_link'>Retourner sur la page d’accueil<br />Return to home page</Link>
        </main>
    )    
}

export default Error404