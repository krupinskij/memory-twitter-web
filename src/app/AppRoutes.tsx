import { Route, Routes } from 'react-router-dom';

import AuthGuard from 'auth/AuthGuard';
import FAQPage from 'pages/FAQPage';
import GameOptionsPage from 'pages/GameOptionsPage';
import GamePage from 'pages/GamePage';
import HomePage from 'pages/HomePage';
import RankingPage from 'pages/RankingPage';
import SettingsPage from 'pages/SettingsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/game"
        element={
          <AuthGuard>
            <GameOptionsPage />
          </AuthGuard>
        }
      />
      <Route
        path="/game/:level"
        element={
          <AuthGuard>
            <GamePage />
          </AuthGuard>
        }
      />
      <Route
        path="/ranking"
        element={
          <AuthGuard>
            <RankingPage />
          </AuthGuard>
        }
      />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
};

export default AppRoutes;
