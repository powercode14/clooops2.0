import 'assets/css/style.css';
import logoImg from 'assets/images/login_logo.png';

const Signin = () => {
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
              <form>
                <div className="field">
                  <input
                    type="text"
                    className="fm-control round w-100"
                    placeholder="ID (Email)"
                    title="이메일"
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="fm-control round w-100"
                    placeholder="Password"
                    title="비밀번호"
                  />
                </div>
              </form>
              <button type="button" className="btn btn-solid big round w-100">
                LOGIN
              </button>
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
