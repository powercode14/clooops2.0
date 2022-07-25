import { useMsal } from '@azure/msal-react';
import useStore from 'auth/store';
import { loginRequest } from 'authConfig';
import { useNavigate } from 'react-router-dom';

export const SignInButton = ({ handleSubmit }) => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === 'popup') {
      instance
        .loginPopup(loginRequest)
        .then((res) => handleSubmit(res))
        .catch((e) => console.log('e', e));
    }
    if (loginType === 'redirect') {
      instance.loginRedirect(loginRequest);
    }
  };

  return (
    <button
      type="submit"
      className="btn btn-outline big round w-100"
      onClick={() => handleLogin('popup')}
      key="loginPopup"
    >
      Microsoft 계정으로 로그인
    </button>
  );
};

/* <MenuItem onClick={() => handleLogin("redirect")} key="loginRedirect">Sign in using Redirect</MenuItem> */
