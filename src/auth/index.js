import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import useStore from './store';

function RequireAuth({ children }) {
  const { user } = useStore();
  const location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};

function AuthStatus() {
  const { user, signOut } = useStore();
  const navigate = useNavigate();

  if (user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {user}!{' '}
      <button
        onClick={() => {
          signOut(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export { RequireAuth, AuthStatus };
