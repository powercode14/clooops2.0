import { RequireAuth } from 'auth';
import useStore from 'auth/store';

const Dashboard = () => {
  const { loading, setLoading, signOut } = useStore();

  const handleLoadingChanged = () => {
    setLoading((prev) => {
      return !prev;
    });
  };

  const handleSignOut = () => signOut();

  return (
    <RequireAuth>
      <p>Dashboard</p>
      {loading ? <p>로딩중</p> : <p>로딩완료</p>}
      <button type="button" onClick={handleLoadingChanged}>
        토글
      </button>
      <br />
      <button onClick={handleSignOut}>로그아웃</button>
    </RequireAuth>
  );
};

export default Dashboard;
