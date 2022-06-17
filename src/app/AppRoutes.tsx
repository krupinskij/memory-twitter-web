import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
