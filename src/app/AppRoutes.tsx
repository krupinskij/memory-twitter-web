import { Navigate, Route, Routes } from 'react-router-dom';

import AuthGuard from 'auth/AuthGuard';
import DisplayPage from 'pages/DisplayPage';
import FAQPage from 'pages/FAQPage';
import GameOptionsPage from 'pages/GameOptionsPage';
import GamePage from 'pages/GamePage';
import HomePage from 'pages/HomePage';
import RankingPage from 'pages/RankingPage';
import ResultPage from 'pages/ResultPage';
import SettingsPage from 'pages/SettingsPage';

import LevelGuard from './components/LevelGuard';

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
            <LevelGuard>
              <GamePage />
            </LevelGuard>
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
      <Route
        path="/result/:resultId"
        element={
          <AuthGuard>
            <ResultPage />
          </AuthGuard>
        }
      />
      <Route path="/display" element={<DisplayPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
