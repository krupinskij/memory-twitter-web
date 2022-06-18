import { Main, Navbar } from 'components/Layout';

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
