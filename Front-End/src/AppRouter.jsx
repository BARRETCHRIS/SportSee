import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import AsideNav from './components/AsideNav/AsideNav';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Tuning from './pages/Tuning';
import Cluster from './pages/Cluster';
import Error404 from './pages/Error404';
import { UserSelectorProvider } from './context/UserSelector'; // Import du UserSelectorProvider

/**
 * Main application router component that sets up routing for the SportSee application.
 *
 * @component
 * @category Routing
 * @returns { React.Component } A React component that provides routing functionality
 */
function AppRouter() {
  return (
    <Router>
      <UserSelectorProvider>
        <Header />
        <AsideNav />
        <Routes>
          {/* Redirections : Redirect old or alternative paths to the updated paths */}
          <Route path="/accueil" element={<Navigate to="/" />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/reglages" element={<Navigate to="/tuning" />} />
          <Route path="/sitting" element={<Navigate to="/tuning" />} />
          <Route path="/profil" element={<Navigate to="/profile" />} />
          <Route path="/community" element={<Navigate to="/cluster" />} />
          <Route path="/communaute" element={<Navigate to="/cluster" />} />

          {/* Routes normales : Define the routes for the application */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/profile/:userID" element={<Profile />} /> {/* Profile page with user ID parameter */}
          <Route path="/profile" element={<Error404 />} /> {/* Profile page with user ID parameter */}
          <Route path="/tuning" element={<Tuning />} /> {/* Tuning page */}
          <Route path="/cluster" element={<Cluster />} /> {/* Cluster page */}
          <Route path="*" element={<Error404 />} /> {/* Fallback route for unmatched paths */}
        </Routes>
      </UserSelectorProvider>
    </Router>
  );
}

export default AppRouter;
