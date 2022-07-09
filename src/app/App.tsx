import { Main, Navbar, Sidebar } from 'components/Layout';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const App = () => (
  <AppProviders>
    <Navbar />
    <Sidebar />
    <Main>
      <AppRoutes />
    </Main>
  </AppProviders>
);

export default App;
