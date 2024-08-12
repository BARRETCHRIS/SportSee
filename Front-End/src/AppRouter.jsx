import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import AsideNav from './components/AsideNav/AsideNav';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Tuning from './pages/Tuning';
import Cluster from './pages/Cluster';
import Error404 from './pages/Error404';
import { UserSelectorProvider } from './context/UserSelector'; // Import du UserSelectorProvider

function AppRouter() {
  return (
    <Router>
      <UserSelectorProvider>
        <Header />
        <AsideNav />
        <Routes>
          {/* Redirections */}
          <Route path="/accueil" element={<Navigate to="/" />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/reglages" element={<Navigate to="/tuning" />} />
          <Route path="/sitting" element={<Navigate to="/tuning" />} />
          <Route path="/profil" element={<Navigate to="/profile" />} />
          <Route path="/community" element={<Navigate to="/cluster" />} />
          <Route path="/communaute" element={<Navigate to="/cluster" />} />

          {/* Routes normales */}
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<Profile />} /> {/* Composant Profile avec l'ID utilisateur */}
          <Route path="/tuning" element={<Tuning />} />
          <Route path="/cluster" element={<Cluster />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserSelectorProvider>
    </Router>
  );
}

export default AppRouter;
