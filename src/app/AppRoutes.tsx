import { Route, Routes } from 'react-router-dom';

import FAQPage from 'pages/FAQPage';
import GameOptionsPage from 'pages/GameOptionsPage';
import GamePage from 'pages/GamePage';
import HomePage from 'pages/HomePage';
import RankingPage from 'pages/RankingPage';
import SettingsPage from 'pages/SettingsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GameOptionsPage />} />
      <Route path="/game" element={<GameOptionsPage />} />
      <Route path="/game/:level" element={<GamePage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
};

export default AppRoutes;
