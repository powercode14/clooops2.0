import { Routes, Route } from 'react-router-dom';
import SignIn from 'pages/signin';
import Dashboard from 'pages/dashboard';

const Router = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="home" element={<Dashboard />} />
  </Routes>
);

export default Router;
