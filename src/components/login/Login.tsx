import './login.css';

const Login = () => {
  return (
    <div>
      <p>HTML + CSS 버전</p>
      <div className="container">
        <div className="logo" />
        <p className="welcome bold">Welcome to ClooOps</p>
        <p className="welcome">
          Experience the best tools for cloud management.
        </p>
        <div className="input_container">
          <input className="input_form" type="text" placeholder="ID(Email)" />
          <input
            className="input_form"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn_login" type="button">
          LOGIN
        </button>
        <div className="copyrignt">
          <p>Copyright ⓒ 2022</p>
          <p>Cloocus Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
