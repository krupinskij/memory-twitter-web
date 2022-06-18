import { Main } from 'components/Layout';
import Navbar from 'components/Navbar';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const App = () => (
  <AppProviders>
    <Navbar />
    <Main>
      <AppRoutes />
    </Main>
  </AppProviders>
);

export default App;
