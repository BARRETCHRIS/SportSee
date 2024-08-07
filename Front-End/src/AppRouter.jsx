
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Header from './components/Header';

// Importez vos composants de page ici
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tuning from './pages/Tuning';
import Cluster from './pages/Cluster';

function AppRouter() {
  return (
    <Router>
        <Header />
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/tuning" element={<Tuning />} />
            <Route path="/cluster" element={<Cluster />} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
