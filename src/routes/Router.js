import { Routes, Route } from 'react-router-dom';
import SignIn from 'pages/signin';
import MonthlyReportDashboard from 'pages/monthlyReport/dashboard';
import Layout from 'component/Layout';
import StorageAccount from 'pages/monthlyReport/storageAccount';

const Router = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="monthlyreport">
      <Route
        path="dashboard"
        element={
          <Layout>
            <MonthlyReportDashboard />
          </Layout>
        }
      />
      <Route
        path="storageaccount"
        element={
          <Layout>
            <StorageAccount />
          </Layout>
        }
      />
    </Route>
  </Routes>
);

export default Router;
