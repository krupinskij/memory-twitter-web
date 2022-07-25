import { Main, Navbar, Sidebar } from 'components/Layout';
import Notifications from 'components/Notifications';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const App = () => (
  <AppProviders>
    <Navbar />
    <Sidebar />
    <Main>
      <AppRoutes />
    </Main>
    <Notifications />
  </AppProviders>
);

export default App;
