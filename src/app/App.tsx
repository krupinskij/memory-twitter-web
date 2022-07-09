import { Footer, Main, Navbar } from 'components/Layout';
import Sidebar from 'components/Layout/Sidebar';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

// const App = () => (
//   <AppProviders>
//     <Navbar />
//     <Main>
//       <AppRoutes />
//     </Main>
//     <Footer />
//   </AppProviders>
// );

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
