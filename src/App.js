import { PersistGate } from 'zustand-persist';
import Router from 'routes/Router';
import useStore from 'auth/store';
import { useNavigate } from 'react-router-dom';

// MSAL imports
import { MsalProvider } from '@azure/msal-react';
import { CustomNavigationClient } from './utils/NavigationClient';

const App = ({ pca }) => {
  useStore();

  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <Router />
    </MsalProvider>
  );
};

export default App;
