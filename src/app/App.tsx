import Navbar from 'components/Navbar';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const App = () => (
  <AppProviders>
    <Navbar />
    <AppRoutes />
  </AppProviders>
);

export default App;
