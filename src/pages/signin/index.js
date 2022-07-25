import logoImg from 'assets/images/login_logo.png';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useStore from 'auth/store';
import { SignInButton } from './SignInButton';

const Signin = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const from =
    location.state?.from?.pathname ?? process.env.REACT_APP_DASHBOARD_PATH;
  const { user, signIn, msLogin } = useStore();

  useEffect(() => {
    if (user) {
      return navigate('/monthlyreport/dashboard', { replace: true });
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    signIn({ email, password }, (err) => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      if (err) {
        console.log(err);
        // passwordRef.current.value = '';
      } else {
        navigate(from, { replace: true });
      }
    });
  }

  const handleMsSubmit = (params) => {
    const { idTokenClaims } = params;
    const { email, aud, tid } = idTokenClaims;
    console.log(idTokenClaims);

    msLogin({ email, aud, tid }, (err) => {
      if (err) {
        console.log(err);
      } else {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div id="login-wrapper">
      <div id="login-container">
        <div className="login-content">
          <div className="wrap-form">
            <div className="login-top-line" />
            <div className="inner">
              <div className="login-title-wrap">
                <h1 className="login-logo">
                  <img src={logoImg} alt="로고" />
                </h1>
                <p>
                  <b>Welcome to ClooOps.</b>
                  <br />
                  Experience the best tools for cloud management.
                </p>
              </div>
              <div className="divide" />
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <input
                    name="email"
                    type="text"
                    className="fm-control round w-100"
                    placeholder="ID (Email)"
                    title="이메일"
                  />
                </div>
                <div className="field">
                  <input
                    name="password"
                    type="password"
                    className="fm-control round w-100"
                    placeholder="Password"
                    title="비밀번호"
                  />
                </div>
                <button type="submit" className="btn btn-solid big round w-100">
                  LOGIN
                </button>
              </form>
              <div
                className="login-footer"
                style={{ marginTop: '3%', marginBottom: '3%' }}
              >
                <p className="ft-100">또는</p>
              </div>
              <SignInButton handleSubmit={handleMsSubmit} />
              <div className="login-footer">
                <p className="ft-100">Copyright ⓒ 2022</p>
                <p className="ft-100">Cloocus Co. Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className="login-bottom-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
