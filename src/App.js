import { PersistGate } from 'zustand-persist';
import Router from 'routes/Router';
import { BrowserRouter } from 'react-router-dom';
import useStore from 'auth/store';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
